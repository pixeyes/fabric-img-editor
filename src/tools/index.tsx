import React, { FC } from "react";
import TypeIcon from "../icons/type";
import ArrowLeftIcon from "../icons/arrow-left";
import SquareIcon from "../icons/square";
import PenIcon from "../icons/pen";
import TrashIcon from "../icons/trash";
import SaveIcon from "../icons/save";
import CloseIcon from "../icons/x";
import cx from "classnames";
import { Popover, Tooltip } from "antd";
import { GithubPicker } from "react-color";
import Circle from "../icons/Circle";
interface AnnotateToolsProps {
  color: string;
  tool: string;
  onToolChange: any;
  onColorChange: any;
  fixedToWindow: boolean;
  popupContainer?: any;
  onCancel: any;
  onSave: any;
  undo: any;
}
const AnnotateTools: FC<AnnotateToolsProps> = ({
  color,
  tool,
  onToolChange,
  onColorChange,
  fixedToWindow,
  popupContainer,
  onCancel,
  undo,
  onSave,
}) => {
  const content = (
    <GithubPicker
      triangle="hide"
      className={"picker"}
      color={color}
      width={"216px"}
      onChangeComplete={(color) => onColorChange(color.hex)}
      colors={[
        "#F04632",
        "#FFC700",
        "#00C853",
        "#00E0FF",
        "#4A9EF2",
        "#FF4DFF",
      ]}
    />
  );

  const toolClass = (toolName: string) =>
    cx({
      toolButton: true,
      toolActive: tool === toolName,
    });

  return (
    <div className={"tools"} style={fixedToWindow ? { position: "fixed" } : {}}>
      <div className={"toolsInner"}>
        <span className={"pickerContainer"} id="pickerContainer" />
        {/*<button
            onClick={() => onToolChange("mouse")}
            className={toolClass("mouse")}
          >
            <MouseIcon className={"icon"} />
          </button>*/}
        <Popover
          trigger="click"
          content={content}
          getPopupContainer={popupContainer}
        >
          <button
            onClick={() => onToolChange("rect")}
            className={toolClass("rect")}
          >
            <SquareIcon className={"icon"} />
          </button>
        </Popover>
        <Popover
          trigger="click"
          content={content}
          getPopupContainer={popupContainer}
        >
          <button
            onClick={() => onToolChange("circle")}
            className={toolClass("circle")}
          >
            <Circle className={"icon"} />
          </button>
        </Popover>
        <Popover
          trigger="click"
          content={content}
          getPopupContainer={popupContainer}
        >
          <button
            onClick={() => onToolChange("arrow")}
            className={toolClass("arrow")}
          >
            <ArrowLeftIcon className={"icon"} />
          </button>
        </Popover>
        <Popover
          trigger="click"
          content={content}
          getPopupContainer={popupContainer}
        >
          <button
            onClick={() => onToolChange("draw")}
            className={toolClass("draw")}
          >
            <PenIcon className={"icon"} />
          </button>
        </Popover>
        <Popover
          trigger="click"
          content={content}
          getPopupContainer={popupContainer}
        >
          <button
            onClick={() => onToolChange("text")}
            className={toolClass("text")}
          >
            <TypeIcon className={"icon"} />
          </button>
        </Popover>

        <hr className={"break"} />
        <Tooltip
          placement="top"
          title="撤销"
          mouseEnterDelay={0.5}
          getPopupContainer={popupContainer}
        >
          <button
            onClick={undo}
            className={cx({
              toolButton: true,
              toolButtonTrash: false,
            })}
          >
            <TrashIcon className={"icon"} />
          </button>
        </Tooltip>
        <Tooltip
          placement="top"
          title="取消"
          mouseEnterDelay={0.5}
          getPopupContainer={popupContainer}
        >
          <button onClick={onCancel} className={"cancel"}>
            <CloseIcon className={"icon"} />
          </button>
        </Tooltip>
        <Tooltip
          placement="top"
          title="保存"
          mouseEnterDelay={0.5}
          getPopupContainer={popupContainer}
        >
          <button onClick={onSave} className={"save"}>
            <SaveIcon className={"icon"} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

AnnotateTools.defaultProps = {
  tool: "",
  color: "#F04632",
  popupContainer: () => document.getElementById("pickerContainer"),
};
export default AnnotateTools;
