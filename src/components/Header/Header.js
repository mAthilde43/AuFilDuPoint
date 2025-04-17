import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <h1>Au Fil du Point</h1>
        <h2>Bienvenue dans l’univers de la couture pour tous</h2>
        <h3>
          Des conseils, techniques et patrons pour coudre avec plaisir, que tu
          sois débutant(e) ou passionné(e)
        </h3>
      </div>
    </div>
  );
};

export default Header;
