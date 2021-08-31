import React from "react";;

function Lock(props:any) {
    return React.createElement("svg",props,[React.createElement("rect",{"x":"3","y":"11","width":"18","height":"11","rx":"2","ry":"2","key":0}),React.createElement("path",{"d":"M7 11V7a5 5 0 0 1 10 0v4","key":1})]);
}

Lock.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","className":"feather feather-lock"};



export default Lock;
