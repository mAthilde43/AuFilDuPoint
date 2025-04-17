import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import debuter from "../../images/home/debuter.jpg";
import techniques from "../../images/home/techniques.jpg";
import patron from "../../images/home/patron.jpg";
import astuces from "../../images/home/astuces.jpg";
import galerie from "../../images/home/galerie.jpg";
import coutureImage from "../../images/home/coutureImage.png";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.whySection}>
        <div className={classes.whyContent}>
          <img src={coutureImage} alt="Pourquoi coudre" />
          <div className={classes.whyText}>
            <h2>Pourquoi coudre ?</h2>
            <p>
              Coudre, c’est plus qu’un loisir. C’est une façon de créer, de
              s’exprimer, et de prendre du temps pour soi.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.cardContainer}>
        <div
          className={classes.card}
          style={{ backgroundImage: `url(${debuter})` }}
        >
          <div className={classes.cardOverlay}>
            <h2>Débuter en couture</h2>
            <p>
              Découvre le matériel indispensable, choisis ta première machine,
              et commence avec des exercices simples !
            </p>
            <Link to="/debuterEnCouture" className={classes.button}>
              Voir
            </Link>
          </div>
        </div>

        <div
          className={classes.card}
          style={{ backgroundImage: `url(${techniques})` }}
        >
          <div className={classes.cardOverlay}>
            <h2>Techniques</h2>
            <p>
              Apprends à connaître les tissus, les aiguilles, et maîtrise les
              points de couture essentiels.
            </p>
            <Link to="/techniques" className={classes.button}>
              Voir
            </Link>
          </div>
        </div>

        <div
          className={classes.card}
          style={{ backgroundImage: `url(${patron})` }}
        >
          <div className={classes.cardOverlay}>
            <h2>Patrons</h2>
            <p>
              Accède à une sélection de patrons pour tous niveaux, à télécharger
              et à coudre chez toi.
            </p>
            <Link to="/patrons" className={classes.button}>
              Voir
            </Link>
          </div>
        </div>

        <div
          className={classes.card}
          style={{ backgroundImage: `url(${astuces})` }}
        >
          <div className={classes.cardOverlay}>
            <h2>Astuces</h2>
            <p>
              Des conseils de pro, des astuces gain de temps et des idées pour
              éviter les erreurs courantes.
            </p>
            <Link to="/astuces" className={classes.button}>
              Voir
            </Link>
          </div>
        </div>

        <div
          className={classes.card}
          style={{ backgroundImage: `url(${galerie})` }}
        >
          <div className={classes.cardOverlay}>
            <h2>Galerie</h2>
            <p>Besoin d’inspiration ? Va voir la galerie !</p>
            <Link to="/galerie" className={classes.button}>
              Voir
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
