import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App
      text={
        "I am UI Developer working on react variety of jamstack projects. Parts of my time is also dedicated to belongging and open source. Seeking employment taht allow me to grow professionaly while being able to utilize my skills for the betterment of the organization with the best use of mt dedication"
      }
      size={130}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
