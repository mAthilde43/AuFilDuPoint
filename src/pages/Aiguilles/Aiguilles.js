import React from "react";
import classes from "./Aiguilles.module.css";
import AiguillesUniverselleImage from "../../images/aiguilles/aiguilles-universelles.jpg";
import AiguillesStretchImage from "../../images/aiguilles/aiguilles-stretch.jpg";
import AiguillesJerseyImage from "../../images/aiguilles/aiguilles-jersey.jpg";
import AiguillesJeansImage from "../../images/aiguilles/aiguilles-jeans.jpg";
import AiguillesCuirImage from "../../images/aiguilles/aiguilles-cuir.jpg";
import AiguillesMicrotexImage from "../../images/aiguilles/aiguilles-microtex.jpg";
import AiguillesBroderieImage from "../../images/aiguilles/aiguilles-broderie.jpg";
import AiguillesDoubleImage from "../../images/aiguilles/aiguilles-double.jpg";
import AiguillesQuiltingImage from "../../images/aiguilles/aiguilles-quilting.jpg";
import AiguillesTopstitchImage from "../../images/aiguilles/aiguilles-topstitch.jpg";
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
    descriptionRecap: "Pointe normale, peu arrondie",
  },
  {
    nom: "Jersey / Stretch",
    image: Jersey,
    descriptionRecap: "Pointe ronde pour tissus extensibles",
  },
  {
    nom: "Jeans",
    image: Jeans,
    descriptionRecap: "Pointe très fine pour tissus épais",
  },
  {
    nom: "Cuir",
    image: Cuir,
    descriptionRecap: "Pointe tranchante pour cuir et simili",
  },
  {
    nom: "Microtex",
    image: Microtex,
    descriptionRecap: "Pointe ultrafine pour soie et microfibres",
  },
  {
    nom: "Broderie",
    image: Broderie,
    descriptionRecap: "Grand chas pour fils à broder",
  },
  {
    nom: "Double",
    image: Double,
    descriptionRecap: "Deux aiguilles pour coutures parallèles",
  },
  {
    nom: "Quilting",
    image: Quilting,
    descriptionRecap: "Pour la piqûre et surpiqûre",
  },
  {
    nom: "Tranchante",
    image: Tranchante,
    descriptionRecap: "Pour ourlets à jour, point décoratif",
  },
];

const Aiguilles = () => {
  return (
    <div className={classes.aiguilles}>
      <h1>Les différentes aiguilles</h1>

      <div className={classes.recapAiguilles}>
        {aiguillesList.map((aiguille, index) => (
          <div key={index} className={classes.aiguilleItem}>
            <img src={aiguille.image} alt={`Aiguille ${aiguille.nom}`} />
            <p className={classes.nom}>{aiguille.nom}</p>
            <p className={classes.descriptionRecap}>
              {aiguille.descriptionRecap}
            </p>
          </div>
        ))}
      </div>

      <div className={classes.aiguillesContainer}>
        {/* Bloc Aiguilles Universelle */}
        <div className={classes.aiguillesBloc}>
          <div className={classes.images}>
            <img src={AiguillesUniverselleImage} alt="Aiguilles universelle" />
          </div>
          <div className={classes.description}>
            <h2>Aiguilles Universelle (Standard)</h2>
            <p>
              <strong>Utilisation :</strong> Pour la majorité des tissus tissés
              (non extensibles).
            </p>
            <p>
              <strong>Tissus adaptés :</strong> Coton, lin, polyester, popeline,
              etc.
            </p>
            <p>
              <strong>Particularité :</strong> Idéale pour les coutures
              classiques du quotidien.
            </p>
            <p>
              <strong>Caractéristiques :</strong> Bout légèrement arrondi
            </p>
          </div>
        </div>

        {/* Bloc Aiguille Stretch */}
        <div className={classes.aiguillesBloc}>
          <div className={classes.images}>
            <img src={AiguillesStretchImage} alt="Aiguille Stretch" />
          </div>
          <div className={classes.description}>
            <h2>Aiguille Stretch</h2>
            <p>
              <strong>Utilisation :</strong> Pour les tissus très extensibles ou
              difficiles.
            </p>
            <p>
              <strong>Tissus adaptés :</strong> Lycra, jersey, spandex, maillots
              de bain, tissus sport.
            </p>
            <p>
              <strong>Particularité :</strong> Empêche les points sautés grâce à
              une forme spéciale de la pointe.
            </p>
            <p>
              <strong>Caractéristiques :</strong> Bout légèrement arrondi, tige
              renforcée
            </p>
          </div>
        </div>

        {/* Bloc Aiguille Jersey */}
        <div className={classes.aiguillesBloc}>
          <div className={classes.images}>
            <img src={AiguillesJerseyImage} alt="Aiguille Jersey" />
          </div>
          <div className={classes.description}>
            <h2>Aiguille Jersey </h2>
            <p>
              <strong>Utilisation :</strong> Tissus tricotés ou en maille
            </p>
            <p>
              <strong>Tissus adaptés :</strong> Jersey, interlock, tricot,
              sweat, élasthanne
            </p>
            <p>
              <strong>Particularité :</strong> Glisse entre les mailles sans les
              abîmer
            </p>
            <p>
              <strong>Caractéristiques :</strong> Bout boule moyenne (arrondi)
            </p>
          </div>
        </div>

        {/* Bloc Aiguille Jeans / Denim */}
        <div className={classes.aiguillesBloc}>
          <div className={classes.images}>
            <img src={AiguillesJeansImage} alt="Aiguille Jeans / Denim" />
          </div>
          <div className={classes.description}>
            <h2>Aiguille Jeans / Denim </h2>
            <p>
              <strong>Utilisation :</strong> Tissus épais et robustes
            </p>
            <p>
              <strong>Tissus adaptés :</strong> Jean, gabardine, toile, cuir fin
            </p>
            <p>
              <strong>Particularité :</strong> Traverse plusieurs couches sans
              casser
            </p>
            <p>
              <strong>Caractéristiques :</strong> Très pointue, épaisse et
              résistante
            </p>
          </div>
        </div>

        {/* Bloc Aiguille Cuir (Leather) */}
        <div className={classes.aiguillesBloc}>
          <div className={classes.images}>
            <img src={AiguillesCuirImage} alt="Aiguille Cuir (Leather)" />
          </div>
          <div className={classes.description}>
            <h2>Aiguille Cuir (Leather) </h2>
            <p>
              <strong>Utilisation :</strong> Matières non tissées comme le cuir
            </p>
            <p>
              <strong>Tissus adaptés :</strong> Cuir, simili, suédine, vinyle
            </p>
            <p>
              <strong>Particularité :</strong> Perce la matière sans
              l’endommager
            </p>
            <p>
              <strong>Caractéristiques :</strong> Pointe coupante en forme de
              triangle
            </p>
          </div>
        </div>

        {/* Bloc Aiguille Microtex */}
        <div className={classes.aiguillesBloc}>
          <div className={classes.images}>
            <img src={AiguillesMicrotexImage} alt="Aiguille Microtex" />
          </div>
          <div className={classes.description}>
            <h2>Aiguille Microtex </h2>
            <p>
              <strong>Utilisation :</strong> Tissus très fins ou délicats
            </p>
            <p>
              <strong>Tissus adaptés :</strong> Soie, organza, voile, taffetas,
              microfibre
            </p>
            <p>
              <strong>Particularité :</strong> Couture nette et précise
            </p>
            <p>
              <strong>Caractéristiques :</strong> Pointe ultra-fine et très
              aiguisée
            </p>
          </div>
        </div>

        {/* Bloc Aiguille Broderie (Embroidery) */}
        <div className={classes.aiguillesBloc}>
          <div className={classes.images}>
            <img
              src={AiguillesBroderieImage}
              alt="Aiguille Broderie (Embroidery)"
            />
          </div>
          <div className={classes.description}>
            <h2>Aiguille Broderie (Embroidery) </h2>
            <p>
              <strong>Utilisation :</strong> Broderie machine avec fils fragiles
              ou métallisés
            </p>
            <p>
              <strong>Tissus adaptés :</strong> Tous tissus à broder (avec
              stabilisateur) microfibre
            </p>
            <p>
              <strong>Particularité :</strong> Protège le fil, réduit l’usure
            </p>
            <p>
              <strong>Caractéristiques :</strong> Pointe fine, grand chas
            </p>
          </div>
        </div>

        {/* Bloc Aiguille Double (Twin Needle) */}
        <div className={classes.aiguillesBloc}>
          <div className={classes.images}>
            <img
              src={AiguillesDoubleImage}
              alt="Aiguille Double (Twin Needle)"
            />
          </div>
          <div className={classes.description}>
            <h2>Aiguille Double (Twin Needle) </h2>
            <p>
              <strong>Utilisation :</strong> Couture parallèle ou décorative
              (ourlet sur tissus stretch)
            </p>
            <p>
              <strong>Tissus adaptés :</strong> Jersey, coton, tissus fins à
              moyens
            </p>
            <p>
              <strong>Particularité :</strong> Deux coutures parallèles en un
              passage
            </p>
            <p>
              <strong>Caractéristiques :</strong> Deux aiguilles sur une seule
              tige
            </p>
          </div>
        </div>

        {/* Bloc Aiguille Quilting (Patchwork) */}
        <div className={classes.aiguillesBloc}>
          <div className={classes.images}>
            <img
              src={AiguillesQuiltingImage}
              alt="Aiguille Quilting (Patchwork)"
            />
          </div>
          <div className={classes.description}>
            <h2>Aiguille Quilting (Patchwork) </h2>
            <p>
              <strong>Utilisation :</strong> Couture de plusieurs couches
              superposées
            </p>
            <p>
              <strong>Tissus adaptés :</strong> Coton, ouate, molleton,
              patchwork
            </p>
            <p>
              <strong>Particularité :</strong> Pointe robuste adaptée aux
              épaisseurs
            </p>
            <p>
              <strong>Caractéristiques :</strong> Pointe fine et renforcée
            </p>
          </div>
        </div>

        {/* Bloc Aiguille Topstitch (Surpiqûre) */}
        <div className={classes.aiguillesBloc}>
          <div className={classes.images}>
            <img
              src={AiguillesTopstitchImage}
              alt="Aiguille Topstitch (Surpiqûre)"
            />
          </div>
          <div className={classes.description}>
            <h2>Aiguille Topstitch (Surpiqûre) </h2>
            <p>
              <strong>Utilisation :</strong> Coutures décoratives apparentes
              avec fils épais
            </p>
            <p>
              <strong>Tissus adaptés :</strong> Tous types (selon l'épaisseur du
              fil)
            </p>
            <p>
              <strong>Particularité :</strong> Facilite le passage des fils
              décoratifs
            </p>
            <p>
              <strong>Caractéristiques :</strong> Pointe moyenne, chas large
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aiguilles;
