import ReactDOM from "react-dom";
import React from "react";

const App = () => {
    return (
        <React.Fragment>
            <h1>Hello Vane!</h1>
            <h2>This is DC's portfolio site :)</h2>
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
