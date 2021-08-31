import React from "react";;

function Pen(props:any) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}));
}

Pen.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","className":"feather feather-edit-2"};



export default Pen;
