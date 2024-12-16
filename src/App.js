import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Homescreen";

import Flutterwave from "./components/flutterwave/Flutterwave";
import Question from "./components/Question/Question";
import HomePage from "./components/Home";
import Navbar from "./Navbar/Navbar";
import ParticlesBackhround from "./components/ParticlesBackhround";
import QRScanner from "./components/Qr/QrReader";

function App() {
  return (
    <div className="App">
      {/* <ParticlesBackhround /> */}
      hi
      {/* <Navbar /> */}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/question" element={<Question />}></Route>
            <Route path="/qr" element={<QRScanner />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
