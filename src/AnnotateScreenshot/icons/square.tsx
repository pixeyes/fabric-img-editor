import React from "react";;

function Square(props:any) {
    return React.createElement("svg",props,React.createElement("rect",{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}));
}

Square.defaultProps = {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round","className":"feather feather-square"};



export default Square;
