import React from "react";
import classes from "./Points.module.css";
import { useState, useEffect } from "react";
import PointArret from "../../images/points/pointArret.png";
import PointBati from "../../images/points/pointBati.png";
import PointDevant from "../../images/points/pointDevant.png";
import PointArriere from "../../images/points/pointArriere.png";
import PointOurletInvisible from "../../images/points/pointOurletInvisible.png";
import PointOurletOblique from "../../images/points/pointOurletOblique.png";
import PointChausson from "../../images/points/pointChausson.png";
import PointCoule from "../../images/points/pointCoule.png";
import PointDroit from "../../images/points/pointDroit.png";
import PointZigzag from "../../images/points/pointZigzag.png";
import PointZigzagTriple from "../../images/points/pointTriplé.png";
import PointZigzagPointille from "../../images/points/pointPointilléOverlock.png";
import PointBoutonniere from "../../images/points/pointBoutonniere.png";
import PointInvisible from "../../images/points/pointInvisible.png";

const Points = () => {
  const [pointsMain, setPointsMain] = useState([]);
  const [pointsMachine, setPointsMachine] = useState([]);

  const imagesMap = {
    "Le point d’arrêt": PointArret,
    "Le point bâti": PointBati,
    "Le point devant": PointDevant,
    "Le point arrière": PointArriere,
    "Le point d’ourlet invisible": PointOurletInvisible,
    "Le point d’ourlet oblique": PointOurletOblique,
    "Le point de chausson": PointChausson,
    "Le point coulé": PointCoule,
  };

  const imagesMapMachine = {
    "Le point droit": PointDroit,
    "Le point zigzag": PointZigzag,
    "Le point zigzag triple": PointZigzagTriple,
    "Le point zigzag pointillé ou overlock": PointZigzagPointille,
    "Le point de boutonnière": PointBoutonniere,
    "Le point invisible": PointInvisible,
  };

  useEffect(() => {
    fetch("http://localhost:5001/points")
      .then((res) => res.json())
      .then((data) => {
        setPointsMain(data[0].pointsMain);
        setPointsMachine(data[0].pointsMachine);
      })
      .catch((err) => console.error("Erreur lors du fetch:", err));
  }, []);

  return (
    <div className={classes.points}>
      <h1>Les types des points</h1>
      <div className={classes.pointsMain}>
        <h2>A LA MAIN</h2>

        {pointsMain.map((point) => (
          <div key={point.id} className={classes.tissuBloc}>
            <div className={classes.images}>
              <img src={imagesMap[point.nom]} alt={point.nom} />
            </div>
            <div className={classes.description}>
              <h3>{point.nom}</h3>
              <p>{point.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={classes.pointsMachine}>
        <h2>A LA MACHINE</h2>
        {pointsMachine.map((point) => (
          <div key={point.id} className={classes.tissuBloc}>
            <div className={classes.images}>
              <img src={imagesMapMachine[point.nom]} alt={point.nom} />
            </div>
            <div className={classes.description}>
              <h3>{point.nom}</h3>
              <p>{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Points;
