import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import ContactUs from "./component/Contact Us";
import Projects from "./component/Projects";
import Gallery from "./component/gallery";
import Nav from "./component/Nav";

const App = () => {
  return (
    <>
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
