import React from "react";;

function ExternalLink(props:any) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6","key":0}),React.createElement("polyline",{"points":"15 3 21 3 21 9","key":1}),React.createElement("line",{"x1":"10","y1":"14","x2":"21","y2":"3","key":2})]);
}

ExternalLink.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","className":"feather feather-external-link"};



export default ExternalLink;
