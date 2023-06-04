import React from "react";
import styles from "./faq.module.scss";

export const metadata = {
  title: "FAQ",
};

const Faq = () => {
  return (
    <React.Fragment>
      <section>
        <h2>Remarque</h2>
        <p>
          Si vous pensez que l'outil a fait une erreur dans la recherche de
          l'équivalence pour votre filière, veuillez nous contacter à partir de
          ce lien.
        </p>
      </section>
    </React.Fragment>
  );
};

export default Faq;
