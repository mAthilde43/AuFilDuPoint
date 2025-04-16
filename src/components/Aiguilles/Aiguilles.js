import React from "react";
import classes from "./Aiguilles.module.css";
import Universelle from "../../images/aiguilles/universelle.png";
import Jersey from "../../images/aiguilles/jersey.png";
import Jeans from "../../images/aiguilles/jeans.png";
import Cuir from "../../images/aiguilles/cuire.png";
import Microtex from "../../images/aiguilles/microtex.png";
import Broderie from "../../images/aiguilles/Broderie.png";
import Double from "../../images/aiguilles/jumelé.png";
import Quilting from "../../images/aiguilles/quitt.png";
import Tranchante from "../../images/aiguilles/tranchante.png";

const aiguillesList = [
  {
    nom: "Universelle",
    image: Universelle,
    descriptionRecap:
      "Idéale pour les coutures du quotidien, cette aiguille au bout légèrement arrondi convient à la majorité des tissus tissés comme le coton, le lin, ou la popeline.",
  },
  {
    nom: "Jersey / Stretch",
    image: Jersey,
    descriptionRecap:
      "Parfaite pour les tissus extensibles comme le lycra ou le jersey, cette aiguille renforcée au bout arrondi évite les points sautés grâce à sa pointe spéciale.",
  },
  {
    nom: "Jeans",
    image: Jeans,
    descriptionRecap:
      "Idéale pour les tissus épais comme le jean ou la toile, cette aiguille robuste et très pointue traverse plusieurs couches sans se casser.",
  },
  {
    nom: "Cuir (Leather)",
    image: Cuir,
    descriptionRecap:
      "Parfaite pour le cuir et les matières non tissées, cette aiguille à pointe triangulaire coupe sans abîmer le tissu.",
  },
  {
    nom: "Microtex",
    image: Microtex,
    descriptionRecap:
      "Idéale pour les tissus fins et délicats, cette aiguille ultra-fine assure des coutures nettes et précises.",
  },
  {
    nom: "Broderie",
    image: Broderie,
    descriptionRecap:
      "Parfaite pour la broderie machine, elle protège les fils fragiles grâce à sa pointe fine et son grand chas.",
  },
  {
    nom: "Double",
    image: Double,
    descriptionRecap:
      "Idéale pour les ourlets décoratifs sur tissus stretch, elle réalise deux coutures parallèles en un seul passage grâce à ses deux aiguilles.",
  },
  {
    nom: "Quilting",
    image: Quilting,
    descriptionRecap:
      "Parfaite pour le patchwork et les tissus épais, elle traverse plusieurs couches avec sa pointe fine et renforcée.",
  },
  {
    nom: "Tranchante",
    image: Tranchante,
    descriptionRecap:
      "Idéale pour les coutures décoratives visibles, elle facilite le passage des fils épais grâce à son chas large et sa pointe moyenne.",
  },
];

const Aiguilles = () => {
  return (
    <div className={classes.aiguilles} id="aiguilles">
      <h1>Les différentes aiguilles</h1>

      <div className={classes.recapAiguilles}>
        {aiguillesList.map((aiguille, index) => (
          <div key={index} className={classes.aiguilleItem}>
            <img src={aiguille.image} alt={`Aiguille ${aiguille.nom}`} />
            <div className={classes.textBloc}>
              <p className={classes.nom}>{aiguille.nom}</p>
              <p className={classes.descriptionRecap}>
                {aiguille.descriptionRecap}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aiguilles;
