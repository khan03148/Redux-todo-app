import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//we export store as default so we can import without barackets{} and with any name
import store from "./store";
//provider is not default export so we need to import in brackets{} and specific name
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
