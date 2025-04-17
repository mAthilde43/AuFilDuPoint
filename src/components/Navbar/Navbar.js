import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Logo from "../../images/logo-transparent-png.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navContent}>
        <div className={classes.logoContent}>
          <Link to="/">
            <img src={Logo} alt="Logo" className={classes.logo} />
          </Link>
        </div>

        <div className={classes.hamburgerMenu} onClick={toggleMenu}>
          <div className={classes.hamburgerLine}></div>
          <div className={classes.hamburgerLine}></div>
          <div className={classes.hamburgerLine}></div>
        </div>

        <ul
          className={`${classes.mainMenu} ${
            isMobileMenuOpen ? classes.mobileOpen : ""
          }`}
        >
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
          <li>
            <Link to="/galerie">Galerie</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
