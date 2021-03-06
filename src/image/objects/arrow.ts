import { fabric } from "fabric";
const Arrow = fabric.util.createClass(fabric.Line, {
  sPoint: null,
  ePoint: null,

  sControl: null,
  eControl: null,
  type: "arrow",
  superType: "drawing",
  initialize(points: any, options: any) {
    this.points = points || []
    if (!points) {
      const { x1, x2, y1, y2 } = options;
      points = [x1, y1, x2, y2];
    }
    options = options || {};
    this.callSuper("initialize", points, options);

  },
  _render(ctx: CanvasRenderingContext2D) {
    this.callSuper("_render", ctx);
    ctx.save();
    const xDiff = this.x2 - this.x1;
    const yDiff = this.y2 - this.y1;
    const angle = Math.atan2(yDiff, xDiff);
    ctx.translate((this.x2 - this.x1) / 2, (this.y2 - this.y1) / 2);
    ctx.rotate(angle);
    ctx.beginPath();
    // Move 5px in front of line to start the arrow so it does not have the square line end showing in front (0,0)
    ctx.moveTo(10, 0);
    ctx.lineTo(-10, 10);
    ctx.lineTo(-10, -10);
    ctx.closePath();
    ctx.fillStyle = this.stroke;
    ctx.fill();
    ctx.restore();
  },
});

Arrow.fromObject = (options: any, callback: any) => {
  const { x1, x2, y1, y2 } = options;
  return callback(new Arrow([x1, y1, x2, y2], options));
};

Arrow.create = ({ points, ...option }: { points: any }) => new Arrow(points, option)

//window.fabric.Arrow = Arrow;

export default Arrow;



