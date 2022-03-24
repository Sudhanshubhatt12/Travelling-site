import React from "react";
import { useNavigate } from "react-router-dom";
import "./Project.css";
const Projectcompo = (propss) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="plates">
        <div className="plate">
          <div className="strt">
            <img src={propss.imgsrc} alt="img" />
            <div className="detail">
              <span className="location">{propss.location}</span>
              <span className="facility">{propss.detail}</span>
              <span className="price">{propss.price}</span>
              <button onClick={() => navigate("/ContactUs")}>Book Now</button>
            </div>
          </div>

          <div className="aboutlocation">
            <h1 className="loca">{propss.location}</h1>
            <div className="des">{propss.des}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectcompo;
