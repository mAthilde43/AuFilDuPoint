import React from "react";
import classes from "./Header.module.css";
import headerImage from "../../images/header_image.png";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.image}>
        <img src={headerImage}></img>
      </div>

      <div className={classes.title}>
        <h1>Bienvenue sur Au Fil Du Point</h1>
        <h3>
          Découvrez un univers couture pensé pour tous, des premiers points aux
          projets les plus créatifs. Apprenez, inspirez-vous, et cousez à votre
          rythme, au fil des envies.
        </h3>
      </div>
    </div>
  );
};

export default Header;
