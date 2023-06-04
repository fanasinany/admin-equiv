import React from "react";
import "./style.scss";
import MaterialSymbolsClose from "../Assets/Icons/MaterialSymbolsClose";

function DegreeNotFind() {
  return (
    <div className="result-not-find">
      <span className="circle">
        <MaterialSymbolsClose />
      </span>
      <p>
        Votre diplôme <span>n'a pas d'équivalence administrative</span> au
        niveau du Ministère du Travail, de l'Emploi, de la Fonction Public et
        des Lois Sociales. <br />
        <br />
        Veuillez vous informez au niveau de l'établissement qui a délivré le
        diplôme.
      </p>
    </div>
  );
}

export default DegreeNotFind;
