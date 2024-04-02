import React from "react";
import ReactDOM from "react-dom";
import Greeting from "@/app";
import "./index.css"; // Import Tailwind CSS

const App = () => <Greeting />;

ReactDOM.render(<App />, document.getElementById("root"));
