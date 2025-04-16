import React from "react";
import classes from "./Techniques.module.css";
import Tissus from "../../components/Tissus/Tissus";
import Aiguilles from "../../components/Aiguilles/Aiguilles";
import Points from "../../components/Points/Points";

const Techniques = () => {
  return (
    <>
      <div className={classes.navbarTechniques}>
        <ul className={classes.mainMenuTechniques}>
          <a href="#tissus">Les tissus</a>
          <a href="#aiguilles">Les aiguilles</a>
          <a href="#points">Les points</a>
        </ul>
      </div>
      <Tissus />
      <Aiguilles />
      <Points />
    </>
  );
};

export default Techniques;
