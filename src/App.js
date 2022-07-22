import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pageone from "./pages/Pageone";
import Pagetwo from "./pages/Pagetwo";
import Pagethree from "./pages/Pagethree";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pageone />} />
        <Route path="book-two" element={<Pagetwo />} />
        <Route path="about" element={<Pagethree />} />
      </Routes>
    </Router>
  );
}

export default App;
