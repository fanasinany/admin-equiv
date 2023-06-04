import React from "react";
import "../style.scss";
import Accordion from "@/components/Accordion";

const Generalite = () => {
  return (
    <div className="section-wrapper">
      <Accordion
        title="Qu'est ce qu'un arrêté d'équivalence ?"
        content={
          <ul>
            Les documents à fournir pour une demande d'équivalence :
            <li>Diplôme original</li>
            <li>
              Photocopie certifiée du diplôme (Certification à faire au niveau
              de l'établissement qui a émis le diplôme)
            </li>
            <li>Photocopie du CIN du titulaire du diplôme</li>
          </ul>
        }
      />
      <Accordion
        title="Qu'est-ce qu'un extrait d'équivalence ?"
        content="Vous pouvez entrer un mot clé dans la barre de recherche ou parcourir les questions suivantes pour avoir les réponses à vos questions."
      />
      <Accordion
        title="Où faire la demande d'une équivalence administrative ?"
        content="Vous pouvez entrer un mot clé dans la barre de recherche ou parcourir les questions suivantes pour avoir les réponses à vos questions."
      />
      <Accordion
        title="Sous quelles conditions est-ce qu'on peut avoir une équivalence administrative ?"
        content="Vous pouvez entrer un mot clé dans la barre de recherche ou parcourir les questions suivantes pour avoir les réponses à vos questions."
      />
      <Accordion
        title="Quel est l'importance d'une équivalence administrative ?"
        content="Vous pouvez entrer un mot clé dans la barre de recherche ou parcourir les questions suivantes pour avoir les réponses à vos questions."
      />
    </div>
  );
};

export default Generalite;
