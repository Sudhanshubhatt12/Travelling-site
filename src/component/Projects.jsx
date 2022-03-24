import React from "react";
import "./projects.css";
import Projectcompo from "./projectcompo";
import PlatesData from "./plateData";

const Projects = () => {
  return (
    <>
      <section className="mainpro">
        <h3>POPULAR DESTINATIONS</h3>
        <p>
          If you're looking for a truely memorable break, <br /> here you find
          the lowest price on the right destination for you.
        </p>
        {PlatesData.map((val, index) => {
          return (
            <Projectcompo
              key={val.id}
              location={val.location}
              imgsrc={val.imgsrc}
              detail={val.detail}
              price={val.price}
              des={val.des}
            />
          );
        })}
      </section>
    </>
  );
};

export default Projects;
