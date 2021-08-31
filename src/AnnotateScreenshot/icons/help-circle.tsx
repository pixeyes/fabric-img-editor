import React from "react";;

function HelpCircle(props:any) {
    return React.createElement("svg",props,[React.createElement("circle",{"cx":"12","cy":"12","r":"10","key":0}),React.createElement("path",{"d":"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3","key":1}),React.createElement("line",{"x1":"12","y1":"17","x2":"12","y2":"17","key":2})]);
}

HelpCircle.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","className":"feather feather-help-circle"};



export default HelpCircle;
