import React from "react";
import classes from "./Patrons.module.css";
import { useState } from "react";
import robeColAsymetriqueImg from "../../images/patrons/robeColAsymetrique/robeColAsymetrique.jpg";
import chemiseCintreImg from "../../images/patrons/chemiseCintre/chemiseCintre.jpg";
const patronList = [
  {
    id: 1,
    title: "Robe col asymétrique",
    description: "Créer une robe asymétrique nouée au cou",
    backgroundImage: `url(${robeColAsymetriqueImg})`,
    details: [
      {
        type: "text",
        content: (
          <>
            <strong>Matériels :</strong>
            <br />
            • Papier à patron kraft
            <br />
            • Crayon, règle, mètre ruban
            <br />
            • Tes mesures
            <br />
            • Tissus fluide non extensible (satin, crêpe, …)
            <br />
            • Optionnel : une robe moulante pour t’aider à tracer
            <br />
            <br />
            <strong>Les mesures à prendre :</strong>
            <br />
            • Tour de poitrine + 4cm d’aisance
            <br />
            • Tour de taille + 2 à 3cm d’aisance
            <br />
            • Tour de hanches + 4cm d’aisance
            <br />
            • Longueur de la robe (épaule à cheville ou sol)
            <br />
            • Hauteur sous bras (environ 20cm)
            <br />
            • Largeur et longueur de la bande (8cm x 100cm)
            <br />
            <br />
            Essaie la robe avec des épingles avant couture finale
            <br />
            Pour plus de confort : ajoute une doublure légère
            <br />
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            <strong>Tracer le devant (sur papier)</strong>
            <br />
            1. Rectangle = hauteur robe / largeur = 1/4 tour de hanches +
            aisance
            <br />
            2. Repère horizontaux : <br />
            • Ligne poitrine à 20cm
            <br />
            • Taille à 40cm
            <br />
            • Hanches à 60cm
            <br />
            3. Courbes côté : poitrine &gt; taille &gt; hanches
            <br />
            4. Forme asymétrique :<br />
            • Coté gauche = aisselle
            <br />
            • Coté droit = base du cou
            <br />
            • Relie en pente
            <br />
          </>
        ),
      },
      {
        type: "image",
        src: require("../../images/patrons/robeColAsymetrique/robeColAsymétriqueImage1.jpg"),
      },
      {
        type: "text",
        content: (
          <>
            <strong>Tracer le dos </strong>
            <br />
            Option 1 : Dos classique droit
            <br />
            Option 2 : Dos nu
            <br />
            <br />
            <strong>Coupe et marges </strong>
            <br />
            • Ajoute 1cm de marge couture partout
            <br />
            • Ajoute 3cm pour l’ourlet du bas
            <br />
            • Prévois une fermeture invisible sous l’aisselle gauche
            <br />
          </>
        ),
      },
      {
        type: "image",
        src: require("../../images/patrons/robeColAsymetrique/robeColAsymétriqueImage2.jpg"),
      },
      {
        type: "text",
        content: (
          <>
            <strong>La bande à nouer</strong>
            <br />
            • Longueur : 100 à 120cm
            <br />
            • Largeur 8cm (avec marges incluses)
            <br />
            • A coudre sur le haut du côté droit (devant)
            <br />
            • A doubler si tissu très fluide
            <br />
            <br />
            <strong>Assemblage</strong>
            <br />
            1. Coudre les côtés de la robe
            <br />
            2. Ajouter la bande sur l’encolure droite
            <br />
            3. Poser la fermeture
            <br />
            4. Finitions : biais, ourlet, parementure ou surjet
            <br />
            5. Faire l’ourlet du bas
            <br />
          </>
        ),
      },
      {
        type: "image",
        src: require("../../images/patrons/robeColAsymetrique/robeColAsymétriqueImage3.jpg"),
      },
    ],
  },

  {
    id: 2,
    title: "La chemise cintrée",
    description: "Cintrer une chemise avec une découpe bretelle",
    backgroundImage: `url(${chemiseCintreImg})`,
    details: [
      {
        type: "text",
        content: (
          <>
            Transformer une vieille chemise trop large en un modèle ajusté et
            élégant grâce à une découpe bretelle. Ce tutoriel simple vous guide
            pas à pas pour obtenir une silhouette plus cintrée, tout en affinant
            les manches pour un rendu harmonieux.
            <br />
            <br />
            <strong>Matériels nécessaire:</strong>
            <br />
            • Une chemise large
            <br />
            • Épingles
            <br />
            • Fil assorti
            <br />
            • Ciseaux de couture
            <br />
            • Mètre ruban
            <br />
            <br />
            • Machine à coudre
            <br />
            <br />
            • Fer à repasser
            <br />
            <br />
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            Posez la chemise sur le devant
            <br />
            <strong>1. Créer la découpe bretelle et ajuster la taille</strong>
            <br />
            1. Tracer la découpe bretelle
            <br />
            • Sur chaque devant de la chemise, tracez une ligne qui part du
            milieu bas, qui passe par le milieu de la poitrine et rejoins le
            milieu de la ligne d’épaule.
            <br />• Cette ligne servira à redessiner la forme du vêtement et à
            affiner la taille
            <br />
          </>
        ),
      },
      {
        type: "image",
        src: require("../../images/patrons/chemiseCintre/chemiseCintreImage1.jpg"),
      },
      {
        type: "text",
        content: (
          <>
            2. Réduire l’exédant de tissu
            <br />
            • À la taille, créer des pinces de 3cm de chaque côté donc mesurer
            1,5cm de chaque côté de la ligne
            <br />
            • Reliez-les avec une ligne droite jusqu’au bas de la chemise et
            jusqu’au milieu de poitrine
            <br />
            <br />
            3. Essayer et ajuster
            <br />
            <br />
            • Épingler le surplus et enfiler la chemise (toujours à l’envers) et
            vérifiez si l’ajustement est bon.
            <br />
            • Ajoute 3cm pour l’ourlet du bas
            <br />
            • Si elle est encore trop large, épinglez un peu plus sur les côtés.
            <br />
          </>
        ),
      },
      {
        type: "image",
        src: require("../../images/patrons/chemiseCintre/chemiseCintreImage2.jpg"),
      },
      {
        type: "text",
        content: (
          <>
            4. Coudre la découpe bretelle
            <br />
            • Découdre quelques centimètres sur la ligne d’épaule.
            <br />
            • Découper sur les lignes en vert que vous avez tracer préalablement
            <br />
            • Piquez le long des lignes tracées pour attirer la silhouette en
            assemblant endroit contre endroit sur l’envers et recoudre la ligne
            d’épaules
            <br />
            • Pour une tenue durable, surfilez les bords des coutures avec une
            surjeteuse ou un point zigzag
            <br />
          </>
        ),
      },
      {
        type: "image",
        src: require("../../images/patrons/chemiseCintre/chemiseCintreImage3.jpg"),
      },
      {
        type: "text",
        content: (
          <>
            <strong>2. Rétrécir les manches</strong>
            <br />
            1. Tracer une nouvelle ligne de couture
            <br />
            • Pour harmoniser la coupe, tracez une ligne qui part de l’aisselle
            jusqu’à la base de la manche.
            <br />
            • Cela permettra d’affiner les bras tout en conservant une liberté
            du mouvement.
            <br />
            <br />
            2. Coudre et ajuster
            <br />
            • Piquez le long des nouvelles lignes tracées
            <br />
            • Si nécessaire, coupez l’excédent de tissus pour éviter un surplus
            de matière
            <br />
            <br />
            (Si la coupe est encore trop large, tu peux reprendre sur le côté en
            même temps que les manches)
          </>
        ),
      },
      {
        type: "image",
        src: require("../../images/patrons/chemiseCintre/chemiseCintreImage4.jpg"),
      },
      {
        type: "text",
        content: (
          <>
            Et voilà ! <br />
            Votre chemise est désormais cintrée avec une découpe bretelle
            élégante et des manches ajustées. Une transformation simple et
            rapide pour un vêtement parfaitement adapté à votre silhouette.
          </>
        ),
      },
    ],
  },
];

const Patrons = () => {
  const [selectedPatron, setSelectedPatron] = useState(null);

  const openModal = (patron) => setSelectedPatron(patron);
  const closeModal = () => setSelectedPatron(null);

  return (
    <div className={classes.patrons} id="patrons">
      <h1>Patrons</h1>
      <div className={classes.container}>
        <div className={classes.infoBox}>
          <p>
            Tu cherches des patrons gratuits ? Va jeter un œil ici :{" "}
            <a
              href="https://www.moodfabrics.com/blog/free-sewing-patterns/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mood Fabrics
            </a>
          </p>
          <p>
            Tu veux que j’ajoute <strong>tes propres patrons</strong> ici ?
            Dis-le moi et en 5 minutes c’est fait !
          </p>
        </div>
      </div>

      <div className={classes.cardContainer}>
        {patronList.map((patron) => (
          <div
            key={patron.id}
            className={classes.card}
            style={{
              backgroundImage: patron?.backgroundImage || "none",
            }}
          >
            <div className={classes.cardHeader}>
              <h3>{patron.title}</h3>
              <p>{patron.description}</p>
            </div>
            <button onClick={() => openModal(patron)}>Voir</button>
          </div>
        ))}
      </div>

      {selectedPatron && (
        <div className={classes.modalOverlay} onClick={closeModal}>
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedPatron.title}</h2>

            <div className={classes.details}>
              {selectedPatron.details.map((block, index) =>
                block.type === "text" ? (
                  <div key={index} className={classes.detailBlock}>
                    <pre>{block.content}</pre>
                    {selectedPatron.details[index + 1]?.type === "image" && (
                      <img
                        src={selectedPatron.details[index + 1].src}
                        alt={`étape ${index + 1}`}
                      />
                    )}
                  </div>
                ) : null
              )}
            </div>

            <button onClick={closeModal} className={classes.closeModal}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patrons;
