import React from "react";;

function CheckCircle(props:any) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M22 11.08V12a10 10 0 1 1-5.93-9.14","key":0}),React.createElement("polyline",{"points":"22 4 12 14.01 9 11.01","key":1})]);
}

CheckCircle.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","className":"feather feather-check-circle"};



export default CheckCircle;
