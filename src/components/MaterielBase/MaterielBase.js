import React from "react";
import classes from "./MaterielBase.module.css";
import machineACoudre from "../../images/materielBase/machineACoudre.jpg";
import fil from "../../images/materielBase/fil.jpg";
import aiguilles from "../../images/materielBase/aiguilles.jpg";
import ciseaux from "../../images/materielBase/ciseaux.jpg";
import metreRuban from "../../images/materielBase/metreRuban.jpg";
import epingles from "../../images/materielBase/epingles.jpg";
import craie from "../../images/materielBase/craie.jpg";
import Regle from "../../images/materielBase/Regle.jpg";
import decoudeur from "../../images/materielBase/decoudeur.jpg";

const outils = [
  {
    titre: "Machine à coudre",
    image: machineACoudre,
    texte:
      "C'est l'outil principal pour la couture. Pour un débutant, une machine simple avec des réglages de base (comme la vitesse, la tension et les types de points) suffit généralement.",
  },
  {
    titre: "Fil",
    image: fil,
    texte: (
      <>
        Utilise un fil adapté : polyester pour tous tissus, coton pour tissus
        légers, élastique pour tissus extensibles.
      </>
    ),
  },
  {
    titre: "Aiguilles pour machine à coudre",
    image: aiguilles,
    texte: (
      <>
        Choisis selon le tissu : universelle 80/12 pour débuter, fine pour
        tissus légers, épaisse pour tissus lourds.
      </>
    ),
  },

  {
    titre: "Ciseaux de couture",
    image: ciseaux,
    texte: (
      <>
        Pour couper les tissus avec précision.
        <br />
        • Ciseaux de coupe tissu.
        <br />• Ciseaux cranteurs (évite l'effilochage).
      </>
    ),
  },
  {
    titre: "Mètre ruban",
    image: metreRuban,
    texte:
      "Indispensable pour mesurer avec précision. Souple, souvent de 150 cm. Idéal pour les vêtements.",
  },
  {
    titre: "Épingles",
    image: epingles,
    texte:
      "Permettent de maintenir les tissus avant couture. Choisis-les fines, avec tête en verre ou plastique pour les tissus délicats.",
  },
  {
    titre: "Craie de tailleur ou marqueur",
    image: craie,
    texte:
      "Permet de marquer les lignes et repères de couture. Choisir une couleur visible sur le tissu.",
  },
  {
    titre: "Règle et règle courbe",
    image: Regle,
    texte:
      "Pour tracer les lignes droites ou courbes (manches, cols). Essentiel pour la précision.",
  },
  {
    titre: "Découseur",
    image: decoudeur,
    texte:
      "Permet de retirer les coutures mal faites ou en cas d’erreur. Très utile pour corriger proprement.",
  },
];

const MaterielBase = () => {
  return (
    <div className={classes.materielBase} id="materielbase">
      <h1>Le matériel de base pour débuter en couture</h1>

      <div className={classes.outilsContainer}>
        {outils.map((outil, index) => (
          <div className={classes.outilCard} key={index}>
            <div className={classes.imageWrapper}>
              <img src={outil.image} alt={outil.titre} />
              <div className={classes.infoBloc}>
                <h2>{outil.titre}</h2>
                <p>{outil.texte}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={classes.titreRecommandation}>
        <h1>P'tit plus</h1>
      </div>

      <div className={classes.conteneurRecommandations}>
        <div className={classes.recommandations}>
          <h2>Recommandations supplémentaires pour débuter</h2>
          <ul>
            <li>Tissus simples comme le coton, le lin ou le jersey léger.</li>
            <li>Évite le cuir, la soie ou les tissus glissants au début.</li>
            <li>Utilise des patrons prêts à coudre pour vêtements simples.</li>
          </ul>
        </div>

        <div className={classes.recommandations}>
          <h2>Astuces pour les débutants</h2>
          <ul>
            <li>Organise ton espace de travail avec une bonne lumière.</li>
            <li>Range bien ton matériel dans des boîtes ou organisateurs.</li>
            <li>
              Commence avec des projets simples : coussins, sacs, accessoires.
            </li>
          </ul>
          <p style={{ marginTop: "1rem", color: "#555" }}></p>
        </div>
      </div>
    </div>
  );
};
export default MaterielBase;
