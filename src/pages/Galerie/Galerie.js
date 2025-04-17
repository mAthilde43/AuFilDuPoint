import React from "react";
import classes from "./Galerie.module.css";
import galerieImage1 from "../../images/galerie/galerieImage1.jpg";
import galerieImage2 from "../../images/galerie/galerieImage2.jpg";
import galerieImage3 from "../../images/galerie/galerieImage3.jpg";
import galerieImage4 from "../../images/galerie/galerieImage4.jpg";
import galerieImage5 from "../../images/galerie/galerieImage5.jpg";
import galerieImage6 from "../../images/galerie/galerieImage6.jpg";
import galerieImage7 from "../../images/galerie/galerieImage7.jpg";
import galerieImage8 from "../../images/galerie/galerieImage8.jpg";
import galerieImage9 from "../../images/galerie/galerieImage9.jpg";
import galerieImage10 from "../../images/galerie/galerieImage10.jpg";
import galerieImage11 from "../../images/galerie/galerieImage11.jpg";
import galerieImage12 from "../../images/galerie/galerieImage12.jpg";
import galerieImage13 from "../../images/galerie/galerieImage13.jpg";
import galerieImage14 from "../../images/galerie/galerieImage14.jpg";
import galerieImage15 from "../../images/galerie/galerieImage15.jpg";
import galerieImage16 from "../../images/galerie/galerieImage16.jpg";
import galerieImage17 from "../../images/galerie/galerieImage17.jpg";
import galerieImage18 from "../../images/galerie/galerieImage18.jpg";

const images = [
  galerieImage1,
  galerieImage2,
  galerieImage3,
  galerieImage4,
  galerieImage5,
  galerieImage6,
  galerieImage7,
  galerieImage8,
  galerieImage9,
  galerieImage10,
  galerieImage11,
  galerieImage12,
  galerieImage13,
  galerieImage14,
  galerieImage15,
  galerieImage16,
  galerieImage17,
  galerieImage18,
];

const Galerie = () => {
  return (
    <div className={classes.galerie} id="galerie">
      <h1>Galerie</h1>
      <div className={classes.imageContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Inspiration ${index + 1}`}
            className={classes.galerieImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Galerie;
