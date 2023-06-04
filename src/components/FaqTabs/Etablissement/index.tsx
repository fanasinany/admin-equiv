import Accordion from "@/components/Accordion";
import React from "react";

const Etablissement = () => {
  return (
    <div className="section-wrapper">
      <Accordion
        title="Quels sont les documents à fournir pour une demande d'un arrêté d'équivalence administrative pour une filière ?"
        content={
          <ul>
            Afin d'obtenir un arrêté d'équivalence correspondant à un diplôme,
            les documents suivants doivent être présentés par l'établissement au
            CNEAT :
            <li>
              Condition d'admission - Volume horaire - durée de la formation
            </li>
            <li>Demande envoyée au MTEFPLS</li>
            <li>L'arrêt d'habilitation ou d'agrément</li>
            <li>Spécimen du diplôme</li>
          </ul>
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

export default Etablissement;
