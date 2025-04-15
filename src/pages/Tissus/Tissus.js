import React from "react";
import classes from "./Tissus.module.css";
import CotonImage from "../../images/tissus/coton-tissus.jpg";
import LinImage from "../../images/tissus/lin-tissus.jpg";
import LaineImage from "../../images/tissus/laine-tissus.jpg";
import SatinImage from "../../images/tissus/satin-tissus.jpg";
import JerseyImage from "../../images/tissus/jersey-tissus.jpg";
import PolaireImage from "../../images/tissus/polaire-tissus.jpg";
import DentelleImage from "../../images/tissus/dentelle-tissus.jpg";

const Tissus = () => {
  return (
    <div className={classes.tissus}>
      <h1>Les types des tissus</h1>

      {/* Bloc Coton : image à gauche */}
      <div className={classes.tissuBloc}>
        <div className={classes.images}>
          <img src={CotonImage} alt="Tissu coton" />
        </div>
        <div className={classes.description}>
          <h2>Coton</h2>
          <p>
            Idéal pour les vêtements comme les chemises, les robes ou les draps,
            le coton est une matière naturelle très appréciée. Facile à coudre,
            doux au toucher et respirant, il convient à tous les niveaux de
            couture, du débutant au plus expérimenté.
          </p>
        </div>
      </div>

      {/* Bloc Lin : image à droite */}
      <div className={`${classes.tissuBloc} ${classes.reverse}`}>
        <div className={classes.images}>
          <img src={LinImage} alt="Tissu lin" />
        </div>
        <div className={classes.description}>
          <h2>Lin</h2>
          <p>
            Léger, respirant et agréable à porter, le lin est parfait pour les
            vêtements d'été. Il offre un aspect froissé naturel très tendance et
            un look à la fois décontracté et élégant. Sa texture unique en fait
            un tissu apprécié pour sa fraîcheur.
          </p>
        </div>
      </div>

      {/* Bloc Laine : image à gauche */}
      <div className={classes.tissuBloc}>
        <div className={classes.images}>
          <img src={LaineImage} alt="Tissu coton" />
        </div>
        <div className={classes.description}>
          <h2>Laine</h2>
          <p>
            La laine est idéale pour l’hiver : chaude, isolante et confortable,
            elle est parfaite pour réaliser des manteaux, des écharpes ou des
            pulls. Ce tissu naturel est également respirant, ce qui permet de
            réguler la température corporelle.
          </p>
        </div>
      </div>

      {/* Bloc Satin : image à droite */}
      <div className={`${classes.tissuBloc} ${classes.reverse}`}>
        <div className={classes.images}>
          <img src={SatinImage} alt="Tissu lin" />
        </div>
        <div className={classes.description}>
          <h2>Satin</h2>
          <p>
            Le satin est un tissu doux et brillant, souvent utilisé pour les
            vêtements de soirée, la lingerie ou les doublures. Il glisse sous
            les doigts et offre un tombé fluide et élégant, ce qui le rend
            parfait pour les créations raffinées et féminines.
          </p>
        </div>
      </div>

      {/* Bloc Jersey : image à gauche */}
      <div className={classes.tissuBloc}>
        <div className={classes.images}>
          <img src={JerseyImage} alt="Tissu coton" />
        </div>
        <div className={classes.description}>
          <h2>Jersey</h2>
          <p>
            Le jersey est un tissu tricoté très extensible, idéal pour les
            vêtements confortables comme les t-shirts, les robes ou les
            leggings. Doux, souple et facile à porter, il épouse bien les formes
            du corps et offre une grande liberté de mouvement.
          </p>
        </div>
      </div>

      {/* Bloc Polaire : image à droite */}
      <div className={`${classes.tissuBloc} ${classes.reverse}`}>
        <div className={classes.images}>
          <img src={PolaireImage} alt="Tissu lin" />
        </div>
        <div className={classes.description}>
          <h2>Polaire</h2>
          <p>
            La polaire est un tissu synthétique chaud, léger et moelleux.
            Parfait pour l’hiver, elle est souvent utilisée pour les vêtements
            d’extérieur, les couvertures ou les vestes. Elle sèche rapidement et
            garde bien la chaleur, même par temps humide.
          </p>
        </div>
      </div>

      {/* Bloc Dentelle : image à gauche */}
      <div className={classes.tissuBloc}>
        <div className={classes.images}>
          <img src={DentelleImage} alt="Tissu coton" />
        </div>
        <div className={classes.description}>
          <h2>Dentelle</h2>
          <p>
            Délicate et raffinée, la dentelle est souvent utilisée pour les
            détails de robes, les accessoires ou la lingerie. Elle apporte une
            touche de féminité et d’élégance, avec ses motifs ajourés qui la
            rendent aussi décorative que légère.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tissus;
