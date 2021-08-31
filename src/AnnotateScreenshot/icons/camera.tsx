import React from "react";;

function Camera(props:any) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z","key":0}),React.createElement("circle",{"cx":"12","cy":"13","r":"4","key":1})]);
}

Camera.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","className":"feather feather-camera"};



export default Camera;
