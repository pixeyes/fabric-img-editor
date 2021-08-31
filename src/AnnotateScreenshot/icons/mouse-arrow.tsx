import React from "react";;

function MouseArrow(props:any) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z","key":0}),React.createElement("path",{"d":"M13 13l6 6","key":1})]);
}

MouseArrow.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","className":"feather feather-mouse-pointer"};



export default MouseArrow;
