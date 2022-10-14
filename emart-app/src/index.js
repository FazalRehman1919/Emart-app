import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <App />
                <Home />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <App />
                <Products />
              </>
            }
          />
          <Route
            path="/products/:id"
            element={
              <>
                <App />
                <Product />
              </>
            }
          />
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass NavLink function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
