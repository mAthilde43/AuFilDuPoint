import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <ul className={classes.mainMenu}>
        <li>
          <Link to="/">Accueil</Link>
        </li>

        <li>
          <Link to="/debuterEnCouture">Débuter en couture</Link>
        </li>
        <li>
          <Link to="/techniques">Techniques</Link>
        </li>

        <li>
          <Link to="/patrons">Patrons</Link>
        </li>

        <li>
          <Link to="/astuces">Astuces</Link>
        </li>

        <li className={classes.dropdown}>
          <Link to="/galerie">Galerie</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
