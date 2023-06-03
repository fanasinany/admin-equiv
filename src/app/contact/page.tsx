import React from "react";
import styles from "./contact.module.scss";
import Image from "next/image";
import mapmada from "../../components/Assets/Images/map-mada.png";

const Contact = () => {
  return (
    <React.Fragment>
      <section>
        <h1>Contactez-nous</h1>
        <p>
          Pour contacter le service des équivalences administrative et titre,
          vous pouvez envoyer votre message à partir du formulaire suivant,
          envoyer un email au contact ci-après ou appeler directement le numéro
          ci-après.
        </p>
      </section>
      <section className={styles.localisation}>
        <h1>NOS LOCALISATIONS AU NIVEAU DES REGIONS</h1>
        <p>
          Veuillez cliquer sur les régions concernées pour voir les
          localisations des directions régionales.
        </p>
        <div>
          <Image src={mapmada} alt="Map Madagascar" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
