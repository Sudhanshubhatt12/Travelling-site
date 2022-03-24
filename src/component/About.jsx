import React from "react";
import { imgdata } from "./imgdata";
import Card from "./Card";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="aboutpage">
        <div className="profile">
          {imgdata.map((val, index) => {
            return <Card img={val.img} name={val.Name} key={val.id} />;
          })}
        </div>
        <div className="aboutmainpara">
          <h1 data-text=" AmazingTravellors"> AmazingTravellors</h1>
          <h2>
            “Travel is the main thing you purchase that <br /> makes you more{" "}
            <br />
            extravagant”.
          </h2>
          <p className="aboutpara">
            We, at ‘Amazing Travellors’, swear by this and put stock in
            satisfying travel dreams that make you perpetually rich constantly.
            <br /> We have been moving excellent encounters for a considerable
            length of time through our cutting-edge planned occasion bundles and
            other fundamental travel administrations.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
