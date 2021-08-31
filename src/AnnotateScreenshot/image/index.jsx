import React from "react";
import Tools from "../tools";
import { fabric } from "fabric";
import "../fabric-history";
import Arrow from "./objects/arrow";

export default class AnnotateImage extends React.Component {
  static defaultProps = {
    toolsFixed: false
  };

  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.container = React.createRef();
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
    window.addEventListener("keyup", ({ keyCode, ctrlKey }) => {
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
    });
  };

  state = {
    canvas: null,
    tool: "",
    container: { width: 1000, height: 1000 },
    color: "#F04632",
    textActive: false,
    textEditing: false,
    selectedObject: undefined,
    mode: ""
  };

  getCanvasSize = async (canvas) =>
    new window.Promise((resolve, reject) => {
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

    const dimensions = await this.getCanvasSize();

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

    fabricCanvas.on("object:scaling", (e) => {
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

    fabricCanvas.on("object:selected", (e) => {
      this.setState({ selectedObject: e.target });
    });

    fabricCanvas.on("before:selection:cleared", (e) => {
      this.setState({ selectedObject: undefined });
    });
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

  onMouseDown = (opt) => {
    const { mode } = this.state;
    const event = opt;
    if (event.target !== null) {
      return;
    }
    if (mode === "arrow") {
      if (this.pointArray.length && this.activeLine) {
        this.generateArrow(event);
      } else {
        if (event.target == null) {
          this.addPoint(event);
        }
      }
    } else if (mode === "text") {
      if (this.state.textActive) {
        if (this.state.textEditing) {
          this.setState({
            textEditing: false
          });
        } else if (event.target == null) {
          this.renderText(event.pointer);
        }
      }
    } else if (mode === "rect") {
      this.mouseFrom.x = event.pointer.x;
      this.mouseFrom.y = event.pointer.y;
      this.doDrawing = true;
    }
  };

  addPoint = (opt) => {
    const { mode } = this.state;
    const { absolutePointer } = opt;
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

  generateArrow = (opt) => {
    const { absolutePointer } = opt;
    const { x, y } = absolutePointer;
    let points = [];
    this.pointArray.forEach((point) => {
      points = points.concat(point.left, point.top, x, y);
      this.canvas.remove(point);
    });
    this.canvas.remove(this.activeLine);
    const option = {
      //id: v4(),
      points,
      type: "arrow",
      stroke: this.state.color,
      strokeWidth: 3,
      opacity: 1,
      objectCaching: !this.editable,
      name: "New line",
      superType: "drawing"
    };
    this.add(option, false);
    this.pointArray = [];
    this.activeLine = null;
    //this.handler.interactionHandler.selection();
  };

  add = (obj, centered = true, loaded = false) => {
    const { editable, onAdd, gridOption, objectOption } = this;
    const option = {
      hasControls: editable,
      hasBorders: editable,
      selectable: editable,
      lockMovementX: !editable,
      lockMovementY: !editable,
      hoverCursor: !editable ? "pointer" : "move"
    };
    if (obj.type === "i-text") {
      option.editable = false;
    } else {
      option.editable = editable;
    }

    const newOption = Object.assign(
      {},
      objectOption,
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
    this.objects = this.getObjects();

    this.forceUpdate();
    return createdObj;
  };

  getObjects = () => {
    const objects = this.canvas.getObjects().filter((obj) => {
      if (obj.id === "workarea") {
        return false;
      } else if (obj.id === "grid") {
        return false;
      } else if (obj.superType === "port") {
        return false;
      } else if (!obj.id) {
        return false;
      }
      return true;
    });
    if (objects.length) {
      objects.forEach((obj) => (this.objectMap[obj.id] = obj));
    } else {
      this.objectMap = {};
    }
    return objects;
  };

  onMouseMove = (opt) => {
    const event = opt;
    const { mode } = this.state;
    if (mode === "arrow") {
      if (this.activeLine && this.activeLine.class === "line") {
        const pointer = this.canvas.getPointer(event.e);
        this.activeLine.set({ x2: pointer.x, y2: pointer.y });
      }
      this.canvas.requestRenderAll();
    } else if (mode === "rect") {
      if (!this.doDrawing) {
        return;
      }
      this.mouseTo.x = event.pointer.x;
      this.mouseTo.y = event.pointer.y;
      this.drawing(event);
    }
  };

  onMouseUp = (e) => {
    var xy = e.pointer;
    this.mouseTo.x = xy.x;
    this.mouseTo.y = xy.y;
    this.drawingObject = null;
    this.moveCount = 1;
    this.doDrawing = false;
  };

  drawing = (e) => {
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
          strokeWidth: 1,
          fill: "rgba(255, 255, 255, 0)",
          hasControls: true
        });
        //也可以使用fabric.Rect
        break;
    }
    if (canvasObject) {
      // canvasObject.index = getCanvasObjectIndex();\
      this.canvas.add(canvasObject); //.setActiveObject(canvasObject)
      this.drawingObject = canvasObject;
    }
  };

  setContainerDimensions = () => {
    const rect = this.props.container.getBoundingClientRect();

    this.setState({
      container: {
        width: rect.width,
        height: rect.height
      }
    });
  };

  blobDimensions = () =>
    new window.Promise((resolve, reject) => {
      const image = new Image();

      image.onload = function() {
        resolve({
          width: image.width,
          height: image.height
        });
      };

      image.src = this.props.blob;
    });

  handleToolChange = (tool) => {
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

  renderText = ({ x, y }) => {
    const newText = new fabric.Textbox("", {
      left: x,
      top: y,
      fontFamily: "sans-serif",
      fill: this.state.color,
      transparentCorners: false,
      lockRotation: true,
      borderColor: "#0E98FC",
      cornerColor: "#0E98FC",
      centeredScaling: false,
      borderOpacityWhenMoving: 1,
      hasControls: false,
      hasRotationPoint: false,
      lockScalingFlip: true,
      lockSkewingX: true,
      lockSkewingY: true,
      cursorWidth: 1,
      width: 100,
      cursorDuration: 1,
      cursorDelay: 250,

    });
    this.canvas.add(newText).setActiveObject(newText);
    this.canvas.bringToFront(newText);
    this.canvas.renderAll();
    newText.enterEditing();
    this.setState({
      textEditing: true
    });
  };

  handleOk = async (event) => {
    event.stopPropagation();
    const dimensions = await this.getCanvasSize();
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

  handleColorChange = (color) => {
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
    this.canvas.undo();
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
          color={this.state.color}
          onSave={this.handleOk}
          onCancel={this.handleCancel}
          onDelete={this.handleDelete}
          canDelete={!!this.state.selectedObject}
          container={this.props.container}
          onToolChange={this.handleToolChange}
          onColorChange={this.handleColorChange}
          fixedToWindow={this.props.toolsFixed}
          undo={this.undo}
        />
      </div>
    );
  }
}