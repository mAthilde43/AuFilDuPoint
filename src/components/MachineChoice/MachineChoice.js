import React from "react";
import classes from "./MachineChoice.module.css";
import machineElec from "../../images/start/machineElec.jpg";
import machineMeca from "../../images/start/machineMeca.jpg";
import coutureImage from "../../images/start/coutureImage.png";

const MachineChoice = () => {
  return (
    <div className={classes.choseMachine} id="machinechoice">
      <h1>Choisir sa machine à coudre</h1>
      <h2>Mécanique VS Électtronique</h2>

      <div className={classes.machine}>
        <div className={classes.images}>
          <img src={machineMeca} alt="Machine mécanique" />
        </div>
        <div className={classes.description}>
          <h3>La machine mécanique</h3>
          <p>
            Ce type de machine est entièrement manuel, ce qui vous offre un
            contrôle total sur les réglages (longueur, largeur des points,
            vitesse). Idéale pour ceux qui aiment personnaliser leur couture.
          </p>
          <p>Fonctionnalités de base :</p>
          <ul>
            <li>Points basiques (point droit et point zigzag)</li>
            <li>Fonction marche arrière</li>
            <li>Réglage de la longueur des points</li>
            <li>Réglage de la vitesse de couture (selon le modèle)</li>
          </ul>
          <p>Avantages :</p>
          <ul>
            <li>Fiabilité et robustesse</li>
            <li>Maîtrise total des réglages</li>
            <li>Moins coûteuse que les machines électroniques</li>
          </ul>
          <p>Fonctionnalités supplémentaires pour couturiers expérimentés :</p>
          <ul>
            <li>Couture en épaisseur (idéal pour les tissus épais)</li>
            <li>Plateau en métal pour plus de stabilité</li>
            <li>Différentes positions d’aiguille</li>
            <li>
              Bras libre pour la couture circulaire (idéal pour les manches,
              pantalons)
            </li>
            <li>Enfile-aiguille automatique pour plus de confort</li>
          </ul>
        </div>
      </div>

      <div className={`${classes.machine} ${classes.reverse}`}>
        <div className={classes.images}>
          <img src={machineElec} alt="Machine mécanique" />
        </div>
        <div className={classes.description}>
          <h3>La machine électronique</h3>
          <p>
            Moderne et intuitive, elle est équipée d’un moteur assisté et
            souvent d’un écran tactile. Elle séduit les débutant·es pour sa
            simplicité, et les couturier·ères expérimenté·es pour son confort et
            sa rapidité.
          </p>
          <p>Fonctionnalités de base :</p>
          <ul>
            <li>
              Grand choix de points (basiques, décoratifs, élastiques, etc.)
            </li>
            <li>Réglages automatiques pour une utilisation rapide et fluide</li>
            <li>
              Prise en main facile grâce à l'écran tactile et aux boutons de
              commande simplifiés
            </li>
          </ul>
          <p>Avantages :</p>
          <ul>
            <li>
              Réglages automatiques : L’enfilage de l’aiguille est automatisé,
              et certains modèles incluent des fonctions comme l’abaissement
              automatique du pied-de-biche
            </li>
            <li>Silencieuse : Idéal pour coudre en soirée</li>
            <li>
              Confort et rapidité : Parfait pour des séances de couture longues
              et sans stress.
            </li>
          </ul>
          <p>Idéale pour :</p>
          <ul>
            <li>
              Les débutant·es qui veulent un outil intuitif et sans prise de
              tête
            </li>
            <li>
              Les couturiers·ères avancés qui recherchent une machine rapide,
              silencieuse et avec beaucoup de points décoratifs
            </li>
          </ul>
        </div>
      </div>

      <h2>Comparer les 2 types de machines</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Critères</th>
            <th>Machine mécanique</th>
            <th>Machine électronique</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Facilité d'utilisation</td>
            <td>Plus complexe, nécessite un contrôle manuel</td>
            <td>Très facile, souvent avec des réglages automatiques</td>
          </tr>
          <tr>
            <td>Vitesse de couture</td>
            <td>Contrôlée par la pédale et le réglage manuel</td>
            <td>Variable, souvent avec des bouton ou écran tactile</td>
          </tr>
          <tr>
            <td>Silence</td>
            <td>Peut être bruyante</td>
            <td>Plus silencieuse</td>
          </tr>
          <tr>
            <td>Réglagles automatiques</td>
            <td>Non</td>
            <td>Oui, pour la tension du fil, les points, etc</td>
          </tr>
          <tr>
            <td>Coût</td>
            <td>Moins chère</td>
            <td>Plus chère</td>
          </tr>
          <tr>
            <td>Robustessse</td>
            <td>Très robuste et durable</td>
            <td>Variable selon les modèles</td>
          </tr>
        </tbody>
      </table>

      <h2>À prendre en compte</h2>
      <div className={classes.Tips}>
        <div className={classes.imagesTips}>
          <img src={coutureImage} alt="Machine mécanique" />
        </div>
        <div className={classes.descriptionTips}>
          <p>
            Si vous êtes débutant·e, une machine électronique peut être plus
            simple et agréable à utiliser.
          </p>
          <p>
            Si vous êtes un(e) couturier(ère) expérimenté(e) ou que vous aimez
            avoir plus de contrôle sur vos créations, une machine mécanique peut
            être une excellente option.
          </p>
          <p>
            {" "}
            Les machines électroniques sont généralement plus silencieuses, ce
            qui est un avantage pour coudre en soirée. En revanche, les machines
            mécaniques sont souvent plus robustes et ont un coût initial plus
            faible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MachineChoice;
