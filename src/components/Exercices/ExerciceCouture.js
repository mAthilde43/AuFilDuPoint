import React from "react";
import classes from "./ExerciceCouture.module.css";
import FicheEntrainementCouture1 from "../../pdf/exercicesCouture/FicheEntrainementCouture1.pdf";
import FicheEntrainementCouture2 from "../../pdf/exercicesCouture/FicheEntrainementCouture2.pdf";
import FicheEntrainementCouture3 from "../../pdf/exercicesCouture/FicheEntrainementCouture3.pdf";
import FicheEntrainementCouture4 from "../../pdf/exercicesCouture/FicheEntrainementCouture4.pdf";
import FicheEntrainementCouture5 from "../../pdf/exercicesCouture/FicheEntrainementCouture5.pdf";
import FicheEntrainementCouture7 from "../../pdf/exercicesCouture/FicheEntrainementCouture7.pdf";
import FicheEntrainementCouture8 from "../../pdf/exercicesCouture/FicheEntrainementCouture8.pdf";
import FicheEntrainementCouture10 from "../../pdf/exercicesCouture/FicheEntrainementCouture10.pdf";
import FicheEntrainementCouture11 from "../../pdf/exercicesCouture/FicheEntrainementCouture11.pdf";
import FicheEntrainementCouture13 from "../../pdf/exercicesCouture/FicheEntrainementCouture13.pdf";
import FicheEntrainementCouture14 from "../../pdf/exercicesCouture/FicheEntrainementCouture14.pdf";
import FicheEntrainementCouture15 from "../../pdf/exercicesCouture/FicheEntrainementCouture15.pdf";
import FicheEntrainementCouture16 from "../../pdf/exercicesCouture/FicheEntrainementCouture16.pdf";
import FicheEntrainementCouture17 from "../../pdf/exercicesCouture/FicheEntrainementCouture17.pdf";
import FicheEntrainementCouture18 from "../../pdf/exercicesCouture/FicheEntrainementCouture18.pdf";
import FicheEntrainementCouture19 from "../../pdf/exercicesCouture/FicheEntrainementCouture19.jpg";

const fichesSimples = [
  { titre: "Spirale carrée", fichier: FicheEntrainementCouture11 },
  { titre: "Petite spirale", fichier: FicheEntrainementCouture13 },
  { titre: "Exagone", fichier: FicheEntrainementCouture14 },
  { titre: "Triangles", fichier: FicheEntrainementCouture15 },
  { titre: "Grandes ondulations", fichier: FicheEntrainementCouture16 },
  { titre: "Petites ondulations", fichier: FicheEntrainementCouture17 },
  { titre: "Étoiles", fichier: FicheEntrainementCouture18 },
  { titre: "Grande spirale", fichier: FicheEntrainementCouture19 },
];

const fichesAvancées = [
  { titre: "Bulles", fichier: FicheEntrainementCouture1 },
  { titre: "Plume", fichier: FicheEntrainementCouture2 },
  { titre: "Plante", fichier: FicheEntrainementCouture3 },
  { titre: "Carrée", fichier: FicheEntrainementCouture4 },
  { titre: "Triangles", fichier: FicheEntrainementCouture5 },
  { titre: "Ondulation", fichier: FicheEntrainementCouture7 },
  { titre: "Spirale", fichier: FicheEntrainementCouture8 },
  { titre: "Formes rondes", fichier: FicheEntrainementCouture10 },
];

const ExerciceCouture = () => {
  return (
    <div className={classes.exerciceCouture} id="exercicecouture">
      <h1>Débuter la couture ... sur papier !</h1>

      <div className={classes.introduction}>
        <p>
          Avant de passer au tissu, s’exercer sur du papier est un excellent
          moyen pour apprendre à maîtriser sa machine, garder une couture
          régulière et gagner en confiance.
        </p>
        <p>
          Ces exercices sont parfaits pour les débutant·es — et pas besoin de
          fil ! Juste une aiguille, ta machine, et quelques feuilles de papier.
        </p>
        <p>
          <strong>Astuce :</strong> Tu peux faire ces exercices aussi sur tissu
          si tu préfères, les instructions restent exactement les mêmes.
        </p>
        <p>
          <strong>Réglage machine :</strong> point droit – sans fil, pour ne pas
          encrasser l'aiguille avec du papier
        </p>
      </div>

      <div className={classes.ensembleExcercies}>
        <div className={classes.exerciceText}>
          <h3>Exercices simples</h3>
          <h4>1. Ligne droite </h4>
          <p>
            Sur une feuille de papier, traces une ligne droite. Entraînes-toi à
            piquer sur la ligne.{" "}
          </p>
          <p>Recommences l’exercice jusqu’à ce que tu te sentes à l’aise. </p>

          <h4>2. Angle droit </h4>
          <p>Sur une feuille de papier, traces un rectangle. </p>
          <p>
            Commences par piquer sur un des côtes du rectangle. Lorsque tu
            arrives sur l’angle : arrêtes-toi en laissant l’aiguille piquée dans
            le papier, soulèves le pied, tournes la feuille d’un quart de tour
            afin de piquer sur le 2e côté du rectangle. Baisses le pied et
            piques le long du 2e côté. Continues pour les angles suivants
            jusqu’à avoir piqué tout le rectangle.{" "}
          </p>
          <p>Recommences l’exercice jusqu’à ce que tu te sentes à l’aise. </p>

          <h4>3. Cercle </h4>
          <p>Sur une feuille de papier, traces un cercle. </p>
          <p>
            Piques sur le tracé du cercle. Pour cela : piques lentement, à
            chaque fois que nécessaire, arrêtes en laissant l’aiguille piquée
            dans le papier, soulèves le pied, tournes légèrement la feuille,
            abaisses le pied et recommences à piquer.{" "}
          </p>
          <p>Recommences l’exercice jusqu’à ce que tu te sentes à l’aise. </p>

          <h4>4. Spirale </h4>
          <p>Sur une feuille de papier, traces une spirale. </p>
          <p>
            Piques le long du tracé de la spirale, en faisant comme pour
            l’exercice du cercle.{" "}
          </p>
          <p>Recommences l’exercice jusqu’à ce que tu te sentes à l’aise. </p>

          <h4>5. Ondulations </h4>
          <p>Sur une feuille de papier, traces des ondulations. </p>
          <p>
            Piques le long du tracé des ondulations, en faisant comme pour
            l’exercice du cercle.{" "}
          </p>
          <p>Recommences l’exercice jusqu’à ce que tu te sentes à l’aise.</p>
        </div>

        <div className={classes.bonus}>
          <h3>Bonus : des feuilles d’entraînement à imprimer !</h3>

          <p>Exercices débutants:</p>
          <ul>
            {fichesSimples.map((fiche, index) => (
              <li key={index}>
                <a href={fiche.fichier} download className={classes.boutonPDF}>
                  {fiche.titre}
                </a>
              </li>
            ))}
          </ul>
          <br />
          <p>Exercices avancés:</p>
          <ul>
            {fichesAvancées.map((fiche, index) => (
              <li key={index}>
                <a href={fiche.fichier} download className={classes.boutonPDF}>
                  {fiche.titre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExerciceCouture;
