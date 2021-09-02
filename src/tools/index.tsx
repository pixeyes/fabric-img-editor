import React from "react";
import TypeIcon from "../icons/type";
import ArrowLeftIcon from "../icons/arrow-left";
import SquareIcon from "../icons/square";
import PenIcon from "../icons/pen";
import TrashIcon from "../icons/trash";
import SaveIcon from "../icons/save";
import CloseIcon from "../icons/x";
import cx from "classnames";
import { Popover, Tooltip } from "antd";
import { TwitterPicker } from "react-color";
import Circle from "../icons/Circle";

export default class AnnotateTools extends React.Component {
  static defaultProps = {
    tool: "",
    color: "#F04632",
  };


  setTool = (tool) => {
    this.props.onToolChange(tool)
  };


  handleColorChange = (color) => {
    this.props.onColorChange(color.hex);
  };

  render() {
    const content = (
      <TwitterPicker
        triangle="hide"
        className={"picker"}
        color={this.props.color}
        onChangeComplete={this.handleColorChange}
        colors={['#FF2600','#00B4FF','#61ED00','#FFEB01','#929292','#FFFFFF']}
      />
    );

    const toolClass = (tool) =>
      cx({
        toolButton: true,
        toolActive: this.state.tool === tool,
      });

    return (
      <div
        className={"tools"}
        style={this.props.fixedToWindow ? { position: "fixed" } : {}}
      >
        <div className={"toolsInner"}>
          {/*<button
            onClick={() => this.setTool("mouse")}
            className={toolClass("mouse")}
          >
            <MouseIcon className={"icon"} />
          </button>*/}
          <Popover trigger="click" content={content}>
            <button
              onClick={() => this.setTool("rect")}
              className={toolClass("rect")}
            >
              <SquareIcon className={"icon"} />
            </button>
          </Popover>
          <Popover trigger="click" content={content}>
            <button
              onClick={() => this.setTool("circle")}
              className={toolClass("circle")}
            >
              <Circle className={"icon"} />
            </button>
          </Popover>
          <Popover trigger="click" content={content}>
            <button
              onClick={() => this.setTool("arrow")}
              className={toolClass("arrow")}
            >
              <ArrowLeftIcon className={"icon"} />
            </button>
          </Popover>
          <Popover trigger="click" content={content}>
            <button
              onClick={() => this.setTool("draw")}
              className={toolClass("draw")}
            >
              <PenIcon className={"icon"} />
            </button>
          </Popover>
          <Popover trigger="click" content={content}>
            <button
              onClick={() => this.setTool("text")}
              className={toolClass("text")}
            >
              <TypeIcon className={"icon"} />
            </button>
          </Popover>

          <button
            onClick={this.props.undo}
            className={cx({
              toolButton: true,
              toolButtonTrash: false,
            })}
          >
            <TrashIcon className={"icon"} />
          </button>

          <hr className={"break"} />
          <Tooltip
            placement="top"
            title="Cancel"
            mouseEnterDelay={0.5}
            align={{ offset: [-12] }}
            getPopupContainer={() => this.props.container}
          >
            <button onClick={this.props.onCancel} className={"cancel"}>
              <CloseIcon className={"icon"} />
            </button>
          </Tooltip>
          <Tooltip
            placement="top"
            title="Save annotations"
            mouseEnterDelay={0.5}
            align={{ offset: [-12] }}
            getPopupContainer={() => this.props.container}
          >
            <button onClick={this.props.onSave} className={"save"}>
              <SaveIcon className={"icon"} />
            </button>
          </Tooltip>
        </div>
      </div>
    );
  }
}
