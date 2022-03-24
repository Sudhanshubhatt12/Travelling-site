import React, { useState } from "react";
import Datapics from "./Datapics";
import { AiFillCloseCircle } from "react-icons/ai";
import "./gallery.css";

const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <section className="main-gal">
        <h1>Gallery</h1>
        <div className={model ? "model open" : "model"}>
          <img src={tempimgSrc} alt="img" />
          <AiFillCloseCircle onClick={() => setModel(false)} />
        </div>
        <div className="gallery">
          {Datapics.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} alt="img" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
