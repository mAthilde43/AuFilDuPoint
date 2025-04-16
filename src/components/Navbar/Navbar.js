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
        <li className={classes.dropdown}>
          <Link to="/start">Débuter en couture</Link>
          <ul className={classes.dropdownMenu}>
            <li>
              <Link to="/start/materiel">Matériel de base</Link>
            </li>
            <li>
              <Link to="/start/chooseMachine">Choisir sa machine</Link>
            </li>
            <li>
              <Link to="/start/exercices">Exercices simples</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/techniques">Techniques</Link>
        </li>

        <li>
          <Link to="/patrons">Patrons</Link>
        </li>
        <li className={classes.dropdown}>
          <Link to="/astuces">Astuces</Link>
          <ul className={classes.dropdownMenu}>
            <li>
              <Link to="/astuces/entretien">Entretien de la machine</Link>
            </li>
            <li>
              <Link to="/astuces/finition">Finitions propres</Link>
            </li>
            <li>
              <Link to="/astuces/organisation">Organisation</Link>
            </li>
          </ul>
        </li>
        <li className={classes.dropdown}>
          <Link to="/galerie">Galerie</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
