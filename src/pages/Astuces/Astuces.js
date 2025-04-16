import React from "react";
import classes from "./Astuces.module.css";

const astucesData = [
  {
    title: "Finitions propres",
    tips: [
      "Surfiler les bords pour éviter l'effilochage",
      "Repasser à chaque étape",
      "Retourner les coins avec une pointe fine",
      "Dégarnir les angles avant de retourner",
    ],
    size: "small",
  },
  {
    title: "Couture des tissus difficiles",
    tips: [
      "Tissus extensibles : utiliser une aiguille jersey et un point élastique",
      "Tissus fins (voile, satin) : utiliser du papier de soie sous le tissu",
      "Tissus épais (jean, simili cuir) : changer l’aiguille (90 ou 100) et rallonger le point",
    ],
    size: "medium",
  },
  {
    title: "Assembler comme un pro",
    tips: [
      "Bâtir à la main ou à la machine avant la couture finale si c’est complexe",
      "Commencer et finir par un point d’arrêt (marche arrière) pour sécuriser",
      "Coudre toujours les pièces principales en premier, puis les détails",
    ],
    size: "medium",
  },
  {
    title: "Bien coudre droit",
    tips: [
      "Utiliser du masking tape comme repère",
      "Regarder le tissu, pas l’aiguille pour garder une ligne régulière",
      "S'entraîner sur du papier, sans fil",
    ],
    size: "small",
  },
  {
    title: "Préparation du tissu",
    tips: [
      "Toujours laver et repasser le tissu avant de le couper (pré-rétrécir)",
      "Épingler les pièces pour éviter les décalages",
      "Utiliser un poids ou un cutter rotatif pour une coupe bien nette",
    ],
    size: "small",
  },
  {
    title: "Organisation",
    tips: [
      "Ranger les aiguilles dans une boîte étiquetée par taille/type",
      "Garder une checklist projet : tissu coupé ? pièces préparées ? etc.",
      "Utiliser une boîte ou trousse mobile avec les essentiels à portée de main",
    ],
    size: "medium",
  },
  {
    title: "Tips de pro",
    tips: [
      "Toujours faire un test de couture sur une chute du même tissu",
      "Penser à la marge de couture (1 cm en général, sauf patron particulier)",
      "Investir dans de bons ciseaux et ne les utiliser que pour le tissu !",
    ],
    size: "medium",
  },

  {
    title: "Gestion des fils et aiguilles",
    tips: [
      "Changer d’aiguille souvent (en fonction du tissu et du projet)",
      "Utiliser du fil de bonne qualité (moins de bourrages)",
      "Rentrer les fils à la fin d’une couture pour une belle finition",
    ],
    size: "small",
  },

  {
    title: "Finitions et détails",
    tips: [
      "Sous-piquer les bords pour qu’ils restent bien à l’intérieur",
      "Cranter les arrondis pour qu’ils soient bien plats après retournement",
      "Utiliser un point invisible pour des ourlets discrets (à la main ou en machine)",
    ],
    size: "small",
  },
  {
    title: "Entretien de la machine à coudre",
    tips: [
      "Nettoyer régulièrement les peluches sous la plaque à aiguille avec un petit pinceau.",
      "Huiler la machine si nécessaire (voir la notice !) pour éviter qu’elle ne grince.",
      "Remplacer les aiguilles émoussées : une aiguille usée peut abîmer le tissu.",
    ],
    size: "medium",
  },
  {
    title: "Créativité et personnalisation",
    tips: [
      "Ajouter des étiquettes cousues à la main pour signer tes créations",
      "Broder un petit détail (initiales, motif, mot doux) pour personnaliser une pièce",
      "Mélanger les matières (tulle, jean, coton, dentelle) pour des effets uniques",
    ],
    size: "medium",
  },
  {
    title: "Gagner du temps intelligemment",
    tips: [
      "Regrouper les étapes similaires (ex. : tous les repassages, toutes les coutures droites)",
      "Préparer un 'kit projet' avec tissu, patron, fil, etc., prêt à l'emploi",
      "Garder un tableau ou carnet de bord pour noter les modifications ou astuces perso",
    ],
    size: "small",
  },
];

const colors = [
  "pastelBlue",
  "pastelGreen",
  "pastelPink",
  "pastelYellow",
  "pastelPurple",
  "pastelOrange",
  "pastelRed",
  "pastelTeal",
  "pastelLavender",
  "pastelMint",
  "pastelPeach",
];

const Astuces = () => {
  return (
    <div className={classes.astuces} id="astuces">
      <h1>Astuces de couture incontournables</h1>
      <div className={classes.grid}>
        {astucesData.map((astuce, index) => {
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              key={index}
              className={`${classes.card} ${classes[astuce.size]} ${
                classes[color]
              }`}
            >
              <h2>{astuce.title}</h2>
              <ul>
                {astuce.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Astuces;
