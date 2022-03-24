import React from "react";
import "./Card.css";

const Card = (car) => {
  return (
    <div className="cards">
      <div className="card">
        <span className="img">
          <img src={car.img} alt={car.name} />
        </span>
        <div className="nam">{car.name}</div>
      </div>
    </div>
  );
};

export default Card;
