import React from "react";
import classes from "./Points.module.css";
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
  return (
    <div className={classes.points} id="points">
      <h1>Les types des points</h1>

      <div className={classes.mainTitle}>
        <h2>À la main</h2>
      </div>

      <div className={classes.pointsMain}>
        {/* Bloc Point d'arrêt */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMain}>
            <img src={PointArret} alt="Point d'arrêt" />
          </div>
          <div className={classes.description}>
            <h3>Le point d’arrêt</h3>
            <p>
              Lorsque l’on coud à la main, il est essentiel de bien fixer les
              points. Le point d’arrêt consiste à réaliser un petit nœud en
              piquant l’aiguille en arrière, puis en formant une boucle
              par-dessus. Cela garantit une fixation solide et durable de votre
              couture, que ce soit pour des réparations ou des projets plus
              complexes.
            </p>
          </div>
        </div>

        {/* Bloc Point Bâti */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMain}>
            <img src={PointBati} alt="Point Bâti" />
          </div>
          <div className={classes.description}>
            <h3>Le point bâti</h3>
            <p>
              Utilisé pour maintenir temporairement deux épaisseurs de tissu, le
              point bâti est idéal lorsque vous souhaitez tester une couture
              avant de la rendre définitive. Avec un fil contrasté, il est
              facile à retirer une fois la couture permanente réalisée. Chaque
              point mesure environ 1 cm de long, et il doit être espacé
              d'environ 0,6 cm.
            </p>
          </div>
        </div>

        {/* Bloc Point devant */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMain}>
            <img src={PointDevant} alt="Point devant" />
          </div>
          <div className={classes.description}>
            <h3>Le point devant</h3>
            <p>
              Ce point très court et régulier est parfait pour réaliser des
              coutures fines ou des fronces. Son utilisation est idéale lorsque
              vous souhaitez une finition propre et solide, idéale pour un usage
              permanent. Pour réaliser un point devant, piquez l’aiguille à 0,2
              cm de chaque côté de la couture et tirez pour fixer le tissu.
            </p>
          </div>
        </div>

        {/* Bloc Point arrière */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMain}>
            <img src={PointArriere} alt="Point arrière" />
          </div>
          <div className={classes.description}>
            <h3>Le point arrière</h3>
            <p>
              Le point arrière est le plus solide des points à la main, parfait
              pour réparer des coutures sur des tissus épais. Il crée une
              couture durable et résistante, idéale pour les matériaux comme la
              toile ou le jean. Pour le réaliser, piquez l’aiguille en arrière
              du dernier point et ressortez un demi-point plus loin, à l’endroit
              où vous souhaitez avancer.
            </p>
          </div>
        </div>

        {/* Bloc Point d’ourlet invisible */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMain}>
            <img src={PointOurletInvisible} alt="Point d’ourlet invisible" />
          </div>
          <div className={classes.description}>
            <h3>Le point d’ourlet invisible</h3>
            <p>
              Le point d’ourlet invisible est une technique de finition soignée
              et discrète, utilisée pour assembler les bords d'un ourlet sans
              que le fil ne soit visible à l’extérieur. Il est parfait pour les
              ourlets sur des tissus délicats et pour donner une finishing
              professionnelle à vos vêtements. À pratiquer avec soin, il est
              pratiquement invisible une fois réalisé !
            </p>
          </div>
        </div>

        {/* Bloc Point d’ourlet oblique */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMain}>
            <img src={PointOurletOblique} alt="Point d’ourlet oblique" />
          </div>
          <div className={classes.description}>
            <h3>Le point d’ourlet oblique</h3>
            <p>
              Rapide mais moins durable, le point d’ourlet oblique est idéal si
              vous êtes pressé(e) et que vous travaillez sur un vêtement que
              vous allez rentrer dans une autre pièce, comme un pantalon. Il
              permet de réaliser un ourlet rapidement, mais ne garantit pas une
              longévité parfaite.
            </p>
          </div>
        </div>

        {/* Bloc Point de chausson */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMain}>
            <img src={PointChausson} alt="Point de chausson" />
          </div>
          <div className={classes.description}>
            <h3>Le point de chausson</h3>
            <p>
              Ce point est très solide et presque invisible, parfait pour fixer
              un ourlet replié de manière discrète. Vous piquerez l’aiguille
              dans le pli de l’ourlet et ressortirez un petit morceau de tissu,
              sans que le point ne soit visible. Cela donne un résultat
              impeccable et durable !{" "}
            </p>
          </div>
        </div>

        {/* Bloc Point coulé */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMain}>
            <img src={PointCoule} alt="Point coulé" />
          </div>
          <div className={classes.description}>
            <h3>Le point coulé</h3>
            <p>
              Le point coulé est utilisé pour joindre deux bords pliés ensemble,
              notamment quand la couture se trouve dans un endroit difficile à
              atteindre. Il crée une couture discrète, idéale pour les
              réparations ou les finitions difficiles à réaliser à la machine.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className={classes.machineTitle}>
        <h2>À la machine</h2>
      </div>
      <div className={classes.pointsMachine}>
        {/* Bloc Point droit */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMachine}>
            <img src={PointDroit} alt="Point droit" />
          </div>
          <div className={classes.description}>
            <h3>Le point droit</h3>
            <p>
              Le point droit est un incontournable, l’Oscar du point le plus
              polyvalent ! Ce point permet de tout faire : assembler, surpiquer,
              réaliser des fronces, poser des zips et plus encore. Si vous ne
              deviez en connaître qu’un, c’est bien celui-ci ! Il faut cependant
              penser à l’associer à un point d’arrêt pour plus de sécurité.
            </p>
          </div>
        </div>

        {/* Bloc Point zigzag */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMachine}>
            <img src={PointZigzag} alt="Point zigzag" />
          </div>
          <div className={classes.description}>
            <h3>Le point zigzag</h3>
            <p>
              Après le point droit, le point zigzag se place en deuxième
              position des points incontournables. Il permet d’éviter
              l’effilochage des tissus, tout en permettant des coutures
              extensibles pour des matériaux comme le jersey. Il est aussi
              parfait pour surfiler ou réaliser des ourlets.{" "}
            </p>
          </div>
        </div>

        {/* Bloc Point zigzag triple */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMachine}>
            <img src={PointZigzagTriple} alt="Point zigzag triple" />
          </div>
          <div className={classes.description}>
            <h3>Le point zigzag triple</h3>
            <p>
              Le zigzag triple est un véritable allié pour les coutures
              extensibles ou pour travailler avec des tissus élastiques. Grâce à
              sa forme plus dense, il garantit une meilleure tenue et permet de
              coudre des élastiques sans les abîmer. Veillez à bien régler la
              tension pour un résultat optimal.{" "}
            </p>
          </div>
        </div>

        {/* Bloc Point zigzag pointillé ou overlock */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMachine}>
            <img
              src={PointZigzagPointille}
              alt="Point zigzag pointillé ou overlock"
            />
          </div>
          <div className={classes.description}>
            <h3>Le point zigzag pointillé ou overlock</h3>
            <p>
              Ce point est un must pour les tissus extensibles comme le jersey
              ou le bord-côte. Il permet de surjeter les bords et d’éviter
              l’effilochage, tout en offrant une grande souplesse dans les
              coutures.{" "}
            </p>
          </div>
        </div>

        {/* Bloc Point boutonnière */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMachine}>
            <img src={PointBoutonniere} alt="Point boutonnière" />
          </div>
          <div className={classes.description}>
            <h3>Le point boutonnière</h3>
            <p>
              Spécialement conçu pour réaliser les boutonnières, ce point vous
              permet de créer des ouvertures précises et soignées pour y insérer
              vos boutons. Parfait pour des finitions professionnelles !{" "}
            </p>
          </div>
        </div>

        {/* Bloc Point invisible */}
        <div className={classes.tissuBloc}>
          <div className={classes.imagesPointsMachine}>
            <img src={PointInvisible} alt="Point invisible" />
          </div>
          <div className={classes.description}>
            <h3>Le point invisible</h3>
            <p>
              Idéal pour les ourlets invisibles, ce point glissé permet de
              réaliser une finition propre et discrète. Grâce à lui, vos
              coutures restent invisibles à l’extérieur, pour une finition
              élégante et nette.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
