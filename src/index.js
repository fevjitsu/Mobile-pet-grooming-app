import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Mobile from "./Mobile";
import store from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const micron = require("webkul-micron");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {window.screen.width > 600 ? <App /> : <Mobile />}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
