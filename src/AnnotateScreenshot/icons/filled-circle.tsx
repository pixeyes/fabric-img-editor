import React from "react";;

function FilledCircle(props:any) {
    return React.createElement("svg",props,React.createElement("circle",{"cx":"12","cy":"12","r":"10"}));
}

FilledCircle.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","className":"feather feather-circle"};



export default FilledCircle;
