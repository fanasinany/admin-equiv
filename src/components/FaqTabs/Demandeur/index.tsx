import Accordion from "@/components/Accordion";
import React from "react";

const Demandeur = () => {
  return (
    <div className="section-wrapper">
      <Accordion
        title="Quels sont les documents à fournir pour une demande d'équivalence ?"
        content={
          <span>
            L'<strong>arrêté d'équivalence</strong> est un document
            gouvernemental sous forme d'arrêté fixant le niveau de chaque
            diplôme et grade délivré et signé par le ministère du Travail, de
            l'Emploi, des Travaux publics et des Lois sociales.
          </span>
        }
      />
      <Accordion
        title="Où faire la certification de la copie du diplôme ?"
        content="Vous pouvez entrer un mot clé dans la barre de recherche ou parcourir les questions suivantes pour avoir les réponses à vos questions."
      />
      <Accordion
        title="Que faire si mon diplôme ou certificat n'a pas d'équivalence ?"
        content="Vous pouvez entrer un mot clé dans la barre de recherche ou parcourir les questions suivantes pour avoir les réponses à vos questions."
      />
      <Accordion
        title="Que faire si j'ai un diplôme issu d'un établissement étranger ?"
        content="Vous pouvez entrer un mot clé dans la barre de recherche ou parcourir les questions suivantes pour avoir les réponses à vos questions."
      />
      <Accordion
        title="Quand est-ce que je peux faire une demande 'équivalence ?"
        content="Vous pouvez entrer un mot clé dans la barre de recherche ou parcourir les questions suivantes pour avoir les réponses à vos questions."
      />
    </div>
  );
};

export default Demandeur;
