import React from "react";
import ReactDOM from "react-dom";

const Element = React.createElement("div",
    {
        id: "main",
        className: "container"
    },
    "Hello world"
);

ReactDOM.render(Element, document.getElementById("root"));