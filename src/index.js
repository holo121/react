import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        React.createElement("div",
            {
                id: "main",
                className: "container"
            },
            "Hello world"
        )
    )
}


ReactDOM.render(<App />, document.getElementById("root"));