import React from "react";
import "./style.scss";
import GridiconsCheckmark from "../Assets/Icons/GridiconsCheckmark";

function DegreeFind() {
  return (
    <div className="result-find">
      <span className="circle">
        <GridiconsCheckmark />
      </span>
      <p>
        Votre diplôme <span>a une équivalence administrative.</span> <br />
        <br />
        Vous pouvez constituez votre dossier de demande et le déposer au niveau
        du Ministère. <br />
        <br />
        Les documents à fournir pour la demande sont :
      </p>
      <ul>
        <li>Diplôme original</li>
        <li>
          Photocopie certifiée du diplôme (Certification à faire au niveau de
          l'établissement qui a émis le diplôme)
        </li>
        <li>Photocopie du CIN du titulaire du diplôme</li>
      </ul>
    </div>
  );
}

export default DegreeFind;
