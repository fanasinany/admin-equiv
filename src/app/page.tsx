import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import paper from "../components/Assets/Images/paper.png";
import layer from "../components/Assets/Images/layer.png";
import CardServiceEquivalence from "@/components/CardServiceEquivalence";
import Link from "next/link";

const Home = () => {
  return (
    <React.Fragment>
      <section className={styles.description}>
        <div>
          <h1>EQUIVALENCE ADMINISTRATIVE D&apos;UN TITRE</h1>
          <p>
            L'<strong>arrêté d'équivalence</strong> est un document
            gouvernemental fixant la catégorie de chaque diplôme et grade
            délivré et signé par le Ministère du Travail, de l'Emploi, des
            Fonctions Publics et des Lois Sociales (MTEFPLS).
          </p>
          <p>
            L'<strong>extrait nominatif d'équivalence administrative</strong>{" "}
            est un arrêté tiré de l'arrêté mère et remis à une personne qui
            possède un diplôme ou une qualification en rapport avec l'arrêté.
          </p>
          <div className={styles.buttonSeachWrapper}>
            <button className="green-button">Rechercher un diplôme</button>
          </div>
        </div>
        <div>
          <Image src={paper} alt="Paper" />
        </div>
      </section>
      <section className={styles.utility}>
        <h2>Utilité d&apos;une équivalence</h2>
        <p>
          Le service des équivalences administratives n&apos;est pas un service
          authentificateur de diplôme. Il fournit les équivalences
          administratives qui servent de complément de dossiers pour les usages
          suivants :
        </p>
        <div>
          <CardServiceEquivalence
            title="Recrutement dans l'administration publique"
            description="Pour les personnes souhaitant devenir agent de l'Etat"
          />
          <CardServiceEquivalence
            title="Reclassement des agents de l'Etat"
            description="pour les fonctionnaires souhaitant avoir une promotion grâce à l'acquisition d'un diplôme ou d'un certificat"
          />
          <CardServiceEquivalence
            title="Intégration des agents non encadrés de l'Etat"
            description="Pour les agents non encadrés de l'Etat qui souhaitent devenir fonctionnaires"
          />
          <CardServiceEquivalence
            title="Participation aux concours administratifs"
            description="Pour les candidats aux différents concours administratifs"
          />
          <CardServiceEquivalence
            title="Sélection pour les bourses extérieures"
            description="Pour les candidats souhaitant candidater pour les bourses extérieures au niveau du Connabex"
          />
          <CardServiceEquivalence
            title="Référence pour le secteur privé"
            description="Pour certaines entreprises privées qui souhaite avoir une référence pour déterminer le salaire d'un travailleur"
          />
        </div>
      </section>
      <section className={styles.step}>
        <h2>Etapes à suivre pour une demande d&apos;équivalence</h2>
        <p>
          Si vous souhaitez effectuer une demande d&apos;équivalence
          administrative pour votre diplôme. Vous pouvez suivre les étapes
          ci-après pour assurer que votre demande soit conforme afin
          d&apos;éviter les cas rejets.
        </p>
        <div className={styles.stepper}></div>
        <div className={styles.usedDocument}>
          <div>
            <Image src={layer} alt="Doc" height={450} />
          </div>
          <div>
            <h2>Documents à fournir</h2>
            <p>
              Ci-après la liste des documents à fournir pour une demande
              d&apos;équivalence :
            </p>
            <ul>
              <li>Diplôme original</li>
              <li>
                01 photocopie certifiée du diplôme (Certification à effectuer au
                niveau de l'établissement qui a délivré le diplôme)
              </li>
              <li>01 Photocopie du CIN du titulaire du diplôme</li>
              <li>
                01 Fiche de demande ( A se procurer au niveau du Ministère)
              </li>
            </ul>
            <p>
              Certains diplômes ou certificat <strong>requièrent des documents
              supplémentaires</strong>. Veuillez utiliser l'<Link href="#">outil de recherche</Link> pour voir
              si votre diplôme requièrent d'autres documents.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.delay}>
        <h2>Délai de délivrance</h2>
        <p>
          Le délai de délivrance de l&apos;équivalence administrative est de 24h
          après le dépôt de la demande. Toutefois, ce délais peut augmenter en
          fonction du nombre de demande reçu.
        </p>
      </section>
    </React.Fragment>
  );
};

export default Home;
