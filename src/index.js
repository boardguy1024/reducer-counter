import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

// Redux関連
import { createStore } from "redux";
import reducers from "./reducers/reducers";
import { Provider } from "react-redux";
// Store生成
const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
