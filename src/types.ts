import { fabric } from "fabric";

export type AnimationType = 'fade' | 'bounce' | 'shake' | 'scaling' | 'rotation' | 'flash' | 'custom' | 'none';

export interface AnimationProperty {
  delay?: number;
  duration?: number;
  autoplay?: boolean;
  loop?: boolean | number;
  type: AnimationType;
  offset?: number;
  opacity?: number;
  bounce?: 'vertical' | 'horizontal';
  shake?: 'vertical' | 'horizontal';
  scale?: number;
  angle?: number;
  fill?: string | fabric.Pattern;
  stroke?: string;
}

export interface LinkProperty {
  enabled?: boolean;
  type?: string;
  state?: string;
  dashboard?: any;
}

export interface TooltipProperty {
  enabled?: boolean;
  type?: string;
  template?: string;
}

export interface TriggerProperty {
  enabled?: boolean;
  type?: string;
  script?: string;
  effect?: string;
}

export interface FabricCanvasOption {
  wrapperEl?: HTMLElement;
}

export type FabricCanvas<T extends any = fabric.Canvas> = T & FabricCanvasOption;

export type FabricObjectOption<T extends any = fabric.IObjectOptions> = T & {
  /**
   * Object id
   * @type {string}
   */
  id?: string;
  /**
   * Parent object id
   * @type {string}
   */
  parentId?: string;
  /**
   * Original opacity
   * @type {number}
   */
  originOpacity?: number;
  /**
   * Original top position
   * @type {number}
   */
  originTop?: number;
  /**
   * Original left position
   * @type {number}
   */
  originLeft?: number;
  /**
   * Original scale X
   * @type {number}
   */
  originScaleX?: number;
  /**
   * Original scale Y
   * @type {number}
   */
  originScaleY?: number;
  /**
   * Original angle
   * @type {number}
   */
  originAngle?: number;
  /**
   * Original fill color
   * @type {(string | fabric.Pattern)}
   */
  originFill?: string | fabric.Pattern;
  /**
   * Original stroke color
   * @type {string}
   */
  originStroke?: string;
  /**
   * Original rotation
   *
   * @type {number}
   */
  originRotation?: number;
  /**
   * Object editable
   * @type {boolean}
   */
  editable?: boolean;
  /**
   * Object Super type
   * @type {string}
   */
  superType?: string;
  /**
   * @description
   * @type {string}
   */
  description?: string;
  /**
   * Animation property
   * @type {AnimationProperty}
   */
  animation?: AnimationProperty;
  /**
   * Tooltip property
   * @type {TooltipProperty}
   */
  tooltip?: TooltipProperty;
  /**
   * Link property
   * @type {LinkProperty}
   */
  link?: LinkProperty;
  /**
   * Is running animation
   * @type {boolean}
   */
  animating?: boolean;
  /**
   * Object class
   * @type {string}
   */
  class?: string;
  /**
   * Is possible delete
   * @type {boolean}
   */
  deletable?: boolean;
  /**
   * Is enable double click
   * @type {boolean}
   */
  dblclick?: boolean;
  /**
   * Is possible clone
   * @type {boolean}
   */
  cloneable?: boolean;
  /**
   * Is locked object
   * @type {boolean}
   */
  locked?: boolean;
  /**
   * This property replaces "angle"
   *
   * @type {number}
   */
  rotation?: number;
  [key: string]: any;
};

export type FabricObject<T extends any = fabric.Object> = T & FabricObjectOption;

export type FabricGroup = FabricObject<fabric.Group> & {
  /**
   * Object that config group
   * @type {FabricObject[]}
   */
  objects?: FabricObject[];
};

export type FabricImage = FabricObject &
  fabric.Image & {
  /**
   * Image URL
   * @type {string}
   */
  src?: string;
  /**
   * Image File or Blob
   * @type {File}
   */
  file?: File;
  /**
   * Image Filter
   * @type {IFilter[]}
   */
  _element?: any;
};

export interface FabricElement extends FabricObject<fabric.Rect> {
  /**
   * Wrapped Element
   * @type {HTMLDivElement}
   */
  container: HTMLDivElement;
  /**
   * Target Element
   * @type {HTMLDivElement}
   */
  element: HTMLDivElement;
  /**
   * Source of Element Object
   */
  setSource: (source: any) => void;
}

export type WorkareaLayout = 'fixed' | 'responsive' | 'fullscreen';

export interface WorkareaOption {
  /**
   * Image URL
   * @type {string}
   */
  src?: string;
  /**
   * Image File or Blbo
   * @type {File}
   */
  file?: File;
  /**
   * Workarea Width
   * @type {number}
   */
  width?: number;
  /**
   * Workarea Height
   * @type {number}
   */
  height?: number;
  /**
   * Workarea Background Color
   * @type {string}
   */
  backgroundColor?: string;
  /**
   * Workarea Layout Type
   * @type {WorkareaLayout}
   */
  layout?: WorkareaLayout;
}




export interface GridOption {
  /**
   * Whether should be enabled
   * @type {boolean}
   */
  enabled?: boolean;
  /**
   * Grid interval
   * @type {number}
   */
  grid?: number;
  /**
   * When had moved object, whether should adjust position on grid interval
   * @type {boolean}
   */
  snapToGrid?: boolean;
  /**
   * Grid line color
   *
   * @type {string}
   */
  lineColor?: string;
  /**
   * Grid border color
   *
   * @type {string}
   */
  borderColor?: string;
}

export interface FabricEvent<T extends any = Event> extends Omit<fabric.IEvent, 'e'> {
  e: T;
  target?: FabricObject;
  subTargets?: FabricObject[];
  button?: number;
  isClick?: boolean;
  pointer?: fabric.Point;
  absolutePointer?: fabric.Point;
  transform?: { corner: string; original: FabricObject; originX: string; originY: string; width: number };
}





