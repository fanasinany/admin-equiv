import React from "react";
import styles from "./contact.module.scss";
import Image from "next/image";
import mapmada from "../../components/Assets/Images/map-mada.png";
import googlemap from "../../components/Assets/Images/googlemap.png";
import ContactIcon from "@/components/Assets/Icons/ContactIcon";
import PhoneIcon from "@/components/Assets/Icons/PhoneIcon";
import MailIcon from "@/components/Assets/Icons/MailIcon";
import SelectInput from "@/components/SelectInput";
export const metadata = {
  title: "Contact"
};

const Contact = () => {
  return (
    <React.Fragment>
      <section className={styles.contactUs}>
        <h1>Contactez-nous</h1>
        <p>
          Pour contacter le service des équivalences administrative et titre,
          vous pouvez envoyer votre message à partir du formulaire suivant,
          envoyer un email au contact ci-après ou appeler directement le numéro
          ci-après.
        </p>
        <div>
          <div className={styles.formWrapper}>
            <form action="#">
              <input type="text" className="underline-input" placeholder="Votre prénom" />
              <input type="email" className="underline-input" placeholder="Votre adresse email" />
              <SelectInput />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows={7}
                className="underline-input"
              ></textarea>
              <div>
                <button type="submit" className="green-button">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
          <div className={styles.adress}>
            <p>
              Vous pouvez trouver le Ministère du Travail, de l'Emplois, de la
              Fonction Public et des Lois Sociales à l'adresse suivante :
            </p>
            <Image
              src={googlemap}
              alt="Google Map"
              style={{ objectFit: "cover" }}
            />
            <div>
              <span>
                <ContactIcon /> 67ha Antananarivo, Madagascar
              </span>
              <span>
                <PhoneIcon /> +261 20 22 xxx xxx
              </span>
              <span>
                <MailIcon /> contact@mtefpls.gov.mg
              </span>
            </div>
          </div>
        </div>
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
