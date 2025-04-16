import React from "react";
import classes from "./DebuterCouture.module.css";
import MaterielBase from "../../components/MaterielBase/MaterielBase";
import MachineChoice from "../../components/MachineChoice/MachineChoice";
import ExerciceCouture from "../../components/Exercices/ExerciceCouture";

const DebuterCouture = () => {
  return (
    <>
      <div className={classes.navbarDebuterCouture}>
        <ul className={classes.mainMenuDebuterCouture}>
          <a href="#materielbase">Le matériel pour débuter</a>
          <a href="#machinechoice">Le choix de la machine</a>
          <a href="#exercicecouture">Exercices de couture</a>
        </ul>
      </div>
      <MaterielBase />
      <MachineChoice />
      <ExerciceCouture />
    </>
  );
};

export default DebuterCouture;
