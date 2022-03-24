import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

import { init } from "ityped";

const Home = () => {
  const textref = useRef();
  useEffect(() => {
    init(textref.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "KEDARNATH",
        "BADRINATH",
        "HARSHIL",
        "DEHRADUN",
        "NAINITAL",
        "TEHRI LAKE",
        "ROOPKUND",
        "SAHASTRATAL",
        "AND MANY MORE..",
      ],
    });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="homepage">
        <div className="main-div">
          <span className="startingPara">A GROUP OF TRAVELLERS</span>
          <h1>
            Explore The Beautiful Places <br />
            <span ref={textref} className="dest"></span>
            <br />
            With Us...
          </h1>
          <button className="btn" onClick={() => navigate("/ContactUs")}>
            Get in touch
          </button>
        </div>
      </div>
      <Projects />
      <About />
      <Footer />
    </>
  );
};

export default Home;
