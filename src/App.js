import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Display from "./Display";
import Product from "./Product";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Product />} />
          <Route path="/display" exact element={<Display />} />
        </Routes>
      </Router>
    </div>
  );
}
