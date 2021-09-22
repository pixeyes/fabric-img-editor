import React, { RefObject } from "react";
import Tools from "../tools";
import { fabric } from "fabric";
import '../corner'
import Arrow from "./objects/arrow";
import { isDelete } from "../utils/shortcut";
import { FabricEvent } from "../types";
interface AnnotateImageProps {
  blob:string
  container?:() => HTMLElement
  onSave:any
  onCancel:any
  toolsFixed:any
}
export default class AnnotateImage extends React.Component<AnnotateImageProps> {
  static defaultProps = {
    toolsFixed: false
  };
  imageRef:RefObject<HTMLCanvasElement>;
  container:RefObject<HTMLDivElement>;
  activeLine:any
  pointArray:any
  editable:boolean
  mouseFrom:any
  mouseTo:any
  doDrawing:any
  drawingObject:any
  canvas:any
  stateArr :any[] = []
  stateIdx :number = 0
  constructor(props:AnnotateImageProps) {
    super(props);
    this.imageRef = React.createRef<HTMLCanvasElement>();
    this.container = React.createRef<HTMLDivElement>();
    this.activeLine = null;
    this.pointArray = [];
    this.editable = true;
    this.mouseFrom = {};
    this.mouseTo = {};
    this.doDrawing = false;
    this.drawingObject = null;
  }

  componentDidMount() {
    this.buildCanvas();
    this.keyupListener();
  }

  keyupListener = () => {
    window.addEventListener("keydown", this.onKeydown,false);
  };

  state = {
    container: { width: 1000, height: 1000 },
    color: "#F04632",
    textActive: false,
    textEditing: false,
    mode: ""
  };

  getCanvasSize = async ()  =>
    new window.Promise((resolve) => {
      const image = new Image();

      image.onload = () => {
        let width = image.naturalWidth;
        let height = image.naturalHeight;
        let widthRatio = width / height;
        let heightRatio = height / width;
        let scale = 1;
        const windowWidth = Math.min(width, document.body.clientWidth);
        const windowHeight = Math.min(height, window.innerHeight);
        const heightOverflow = height - windowHeight;
        const widthOverflow = width - windowWidth;

        if (heightOverflow > 0 || widthOverflow > 0) {
          if (heightOverflow > widthOverflow) {
            scale = windowHeight / height;
            height = windowHeight;
            width = windowHeight * widthRatio;
          } else if (widthOverflow > heightOverflow) {
            scale = windowWidth / width;
            width = windowWidth;
            height = windowWidth * heightRatio;
          }
        }

        resolve({
          width,
          height,
          scale,
          imageWidth: image.naturalWidth,
          imageHeight: image.naturalHeight
        });
      };

      image.src = this.props.blob;
    });

  buildCanvas = async (blob = this.props.blob) => {
    if (this.canvas) {
      // if the user comes back to edit annotations
      this.canvas.renderAll();
      return;
    }

    const dimensions = await this.getCanvasSize() as any;

    const canvas = this.imageRef.current;

    const fabricCanvas = new fabric.Canvas(canvas, {
      isDrawingMode: false,
      imageSmoothingEnabled: false,
      selectionColor: "rgba(0,0,0,0.05)"
    });

    fabricCanvas.setDimensions({
      width: dimensions.width,
      height: dimensions.height
    });

    this.canvas = fabricCanvas;

    fabricCanvas.setBackgroundImage(
      blob,
      fabricCanvas.renderAll.bind(fabricCanvas),
      {
        scaleX: dimensions.scale,
        scaleY: dimensions.scale
      }
    );

    fabricCanvas.on("object:scaling", (e:any) => {
      var o = e.target;
      if (!o.strokeWidthUnscaled && o.strokeWidth) {
        o.strokeWidthUnscaled = o.strokeWidth;
      }
      if (o.strokeWidthUnscaled) {
        o.strokeWidth = o.strokeWidthUnscaled / o.scaleX;
      }
    });

    fabricCanvas.freeDrawingBrush.color = this.state.color;
    fabricCanvas.freeDrawingBrush.width = 1;

    // fabricCanvas.on("mouse:down", (options) => {
    //   if (this.state.textActive) {
    //     if (this.state.textEditing) {
    //       this.setState({
    //         textEditing: false,
    //       });
    //     } else if (options.target == null) {
    //       this.renderText(options.pointer);
    //     }
    //   }
    // });
    fabricCanvas.on("mouse:down", this.onMouseDown);
    fabricCanvas.on("mouse:move", this.onMouseMove);
    fabricCanvas.on("mouse:up", this.onMouseUp);
  };

  onAfterRender = () =>{
      this.stateArr.push(this.canvas.toJSON())
      this.stateIdx++
  }

  onKeydown = (e:KeyboardEvent) => {
    const { keyCode, ctrlKey } = e

    if (isDelete(e)){
      this.remove()
    }
    // Check Ctrl key is pressed.
    if (!ctrlKey) {
      return;
    }

    // Check pressed button is Z - Ctrl+Z.
    if (keyCode === 90) {
      this.undo();
    }

    // Check pressed button is Y - Ctrl+Y.
    if (keyCode === 89) {
      this.redo();
    }
  }

  remove = () =>{
    const activeObject =  this.canvas.getActiveObject()
    if (!activeObject) {
      return;
    }
    this.canvas.remove(activeObject);
  }

  onMouseDown = (opt:FabricEvent) => {
    const { mode } = this.state;
    const event = opt as FabricEvent<MouseEvent>;
    // if (event.target !== null) {
    //   return;
    // }
    if (mode === "arrow") {
      if (this.pointArray.length && this.activeLine) {
        this.generateArrow(event);
      } else {
          this.addPoint(event);
      }
    } else if (mode === "text") {
      if (this.state.textActive) {
        if (this.state.textEditing) {
          this.setState({
            textEditing: false
          });
        } else {
          this.renderText(event.pointer!);
        }
      }
    } else if (mode === "rect" || mode === "circle") {
      this.mouseFrom.x = event.pointer!.x;
      this.mouseFrom.y = event.pointer!.y;
      this.doDrawing = true;
    }
  };

  addPoint = (opt:FabricEvent) => {
    const { absolutePointer } = opt as any;
    const { x, y } = absolutePointer;
    const circle = new fabric.Circle({
      radius: 3,
      fill: "#ffffff",
      stroke: "#333333",
      strokeWidth: 0.5,
      left: x,
      top: y,
      selectable: false,
      hasBorders: false,
      hasControls: false,
      originX: "center",
      originY: "center",
      hoverCursor: "pointer"
    });
    if (!this.pointArray.length) {
      circle.set({
        fill: "red"
      });
    }
    const points = [x, y, x, y];
    this.activeLine = new Arrow(points, {
      strokeWidth: 2,
      fill: "#999999",
      stroke: this.state.color,
      class: "line",
      originX: "center",
      originY: "center",
      selectable: false,
      hasBorders: false,
      hasControls: false,
      evented: false
    });
    this.activeLine.set({
      class: "line"
    });
    this.pointArray.push(circle);
    this.canvas.add(this.activeLine);
    this.canvas.add(circle);
  };

  generateArrow = (opt:any) => {
    const { absolutePointer } = opt;
    const { x, y } = absolutePointer;
    let points :any= [];
    this.pointArray.forEach((point:any) => {
      points = points.concat(point.left, point.top, x, y);
      this.canvas.remove(point);
    });
    this.canvas.remove(this.activeLine);
    const option = {
      //id: v4(),
      points,
      type: "arrow",
      stroke: this.state.color,
      strokeWidth: 6,
      opacity: 1,
      objectCaching: !this.editable,
      name: "New line",
      superType: "drawing",
    };
    this.add(option);
    this.pointArray = [];
    this.activeLine = null;
    //this.handler.interactionHandler.selection();
  };

  add = (obj:any, ) => {
    const { editable } = this;
    const option = {
      hasControls: true,
      hasBorders: true,
      selectable: editable,
      lockMovementX: !editable,
      lockMovementY: !editable,
      hoverCursor: !editable ? "pointer" : "default",
      editable :editable,
      // _controlsVisibility:{
      //   tl:true,
      //   mt:false
      // }
    };


    const newOption = Object.assign(
      {},
      obj,
      {
        editable
      },
      option
    );
    // Individually create canvas object
    let createdObj;
    // Create canvas object

    createdObj = Arrow.create(newOption);
    this.canvas.add(createdObj);
    this.forceUpdate();
    return createdObj;
  };


  onMouseMove = (opt:any) => {
    const event = opt;
    const { mode } = this.state;
    if (mode === "arrow") {
      if (this.activeLine && this.activeLine.class === "line") {
        const pointer = this.canvas.getPointer(event.e);
        this.activeLine.set({ x2: pointer.x, y2: pointer.y });
      }
      this.canvas.requestRenderAll();
    } else if (mode === "rect" || mode === "circle") {
      if (!this.doDrawing) {
        return;
      }
      this.mouseTo.x = event.pointer.x;
      this.mouseTo.y = event.pointer.y;
      this.drawing(event);
    }
  };

  onMouseUp = (e:any) => {
    var xy = e.pointer;
    this.mouseTo.x = xy.x;
    this.mouseTo.y = xy.y;
    this.canvas.renderAll();
    this.drawingObject = null;
    this.doDrawing = false;
  };

  drawing = (e:any) => {
    if (this.drawingObject) {
      this.canvas.remove(this.drawingObject);
    }
    var canvasObject = null;
    var left = this.mouseFrom.x,
      top = this.mouseFrom.y,
      mouseFrom = this.mouseFrom,
      mouseTo = this.mouseTo;

    switch (this.state.mode) {
      case "rect":
        if (e.e.shiftKey) {
          mouseTo.x - left > mouseTo.y - top ? mouseTo.y = top + mouseTo.x - left : mouseTo.x = left + mouseTo.y - top;
        }
        var path =
          "M " +
          mouseFrom.x +
          " " +
          mouseFrom.y +
          " L " +
          mouseTo.x +
          " " +
          mouseFrom.y +
          " L " +
          mouseTo.x +
          " " +
          mouseTo.y +
          " L " +
          mouseFrom.x +
          " " +
          mouseTo.y +
          " L " +
          mouseFrom.x +
          " " +
          mouseFrom.y +
          " z";
        canvasObject = new fabric.Path(path, {
          left: left,
          top: top,
          stroke: this.state.color,
          strokeWidth: 4,
          fill: "rgba(255, 255, 255, 0)",
          hasControls: true,
          hasBorders:false,
          padding:-2
        });
        //也可以使用fabric.Rect
        break;
      case "circle": //椭圆
        // 按shift时画正圆，只有在鼠标移动时才执行这个，所以按了shift但是没有拖动鼠标将不会画圆
        if (e.e.shiftKey) {
          mouseTo.x - left > mouseTo.y - top ? mouseTo.y = top + mouseTo.x - left : mouseTo.x = left + mouseTo.y - top
        }

        canvasObject = new fabric.Ellipse({
          left: (mouseTo.x - left) / 2 + left,
          top: (mouseTo.y - top) / 2 + top,
          stroke: this.state.color,
          fill: "rgba(255, 255, 255, 0)",
          originX: "center",
          originY: "center",
          rx: Math.abs(left - mouseTo.x) / 2,
          ry: Math.abs(top - mouseTo.y) / 2,
          strokeWidth: 4,
          padding:-2
        });
        break;
    }
    if (canvasObject) {
      // canvasObject.index = getCanvasObjectIndex();\
      this.canvas.add(canvasObject);//.setActiveObject(canvasObject)

      this.drawingObject = canvasObject;
    }
  };

  handleToolChange = (tool:string) => {
    this.setState({
      mode: tool
    });
    this.canvas.isDrawingMode = tool === "draw";
    this.canvas.defaultCursor = tool === "text"?"text":"";
    switch (tool) {
      case "mouse":
        //this.handleMouse();
        break;
      case "arrow":
        this.initArrow();
        break;
      case "rect":
        //this.handleRect();
        break;
      case "draw":
        //this.handleDraw();
        break;
      case "text":
        this.handleText();
        break;
    }
  };


  initArrow = () => {
    this.activeLine = null;
    this.pointArray = [];
  };


  handleText = () => {
    this.setState({
      textActive: true
    });
    this.canvas.defaultCursor = "text";
  };
  //@ts-ignore
  renderText = ({ x, y }) => {
    const newText = new fabric.Textbox("", {
      left: x,
      top: y,
      fontFamily: "sans-serif",
      fill: this.state.color,
      transparentCorners: false,
      lockRotation: true,
      borderColor: "#0E2439",
      cornerColor: "#0E2439",
      centeredScaling: false,
      borderOpacityWhenMoving: 1,
      hasControls: false,
      lockScalingFlip: true,
      lockSkewingX: true,
      lockSkewingY: true,
      cursorWidth: 1,
      width: 100,
      cursorDuration: 1,
      cursorDelay: 250,
      fontSize:16
    });
    this.canvas.add(newText).setActiveObject(newText);
    this.canvas.bringToFront(newText);
    this.canvas.renderAll();
    newText.enterEditing();
    this.setState({
      textEditing: true
    });
  };

  handleOk = async (event:any) => {
    event.stopPropagation();
    const dimensions = await this.getCanvasSize() as any;
    const dataURL = this.canvas.toDataURL({
      format: "png",
      multiplier: 1 / dimensions.scale
    });
    //const json = this.canvas.toObject();
    //console.log(json);
    this.props.onSave(dataURL);
  };

  handleCancel = () => {
    if (this.canvas) {
      this.canvas.remove(...this.canvas.getObjects());
    }
    this.props.onCancel();
  };

  handleDelete = () => {
    this.canvas.remove(this.canvas.getActiveObject());
  };

  handleColorChange = (color:string) => {
    this.setState({ color });
    this.canvas.freeDrawingBrush.color = color;
    this.canvas.stroke = color;

    const activeObject = this.canvas.getActiveObject();

    if (activeObject) {
      if (activeObject.stroke) {
        activeObject.set({ stroke: color });
      }
      // if (activeObject.fill) {
      //   activeObject.set({ fill: color });
      // }
      this.canvas.renderAll();
    }
  };

  undo = () => {
    this.canvas.remove(
      this.canvas.getObjects()[this.canvas.getObjects().length - 1]
    );
  };
  redo = () => {
    this.canvas.redo();
  };

  render() {
    return (
      <div className={"container"}>
        <div className={"markerContainer"} ref={this.container}>
          <canvas className={"image"} ref={this.imageRef} />
        </div>
        <Tools
          tool={this.state.mode}
          color={this.state.color}
          onSave={this.handleOk}
          onCancel={this.handleCancel}
          popupContainer={this.props.container}
          onToolChange={this.handleToolChange}
          onColorChange={this.handleColorChange}
          fixedToWindow={this.props.toolsFixed}
          undo={this.undo}
        />
      </div>
    );
  }
}
