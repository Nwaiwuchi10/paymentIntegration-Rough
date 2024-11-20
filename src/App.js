import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar/Navbar";
import Flutterwave from "./components/flutterwave/Flutterwave";
import Question from "./components/Question/Question";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Flutterwave />}></Route>
            <Route path="/question" element={<Question />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
