import React from "react";
import styles from "./search-degree.module.scss";
import DegreeFind from "@/components/DegreeFind";
import AboutDegree from "@/components/AboutDegree";
export const metadata = {
  title: "Rechercher votre diplôme",
};

const SearchDegree = () => {
  return (
    <React.Fragment>
      <section className={styles.search}>
        <h1>RECHERCHEZ VOTRE DIPLÔME</h1>
        <p>
          Cet outil vous permet de vérifier si votre diplôme ou titre a une
          équivalence administrative émis par le CNEAT (Commission nationale des
          équivalences administratives des titres) ou non.
        </p>
        <div className={styles.searchWrapper}>
          <form action="#">
            <h2>A propos du diplôme ou certificat</h2>
            <AboutDegree />
          </form>
          <div>
            <h2>Résultat de la recherche</h2>
            <DegreeFind />
          </div>
        </div>
      </section>
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

export default SearchDegree;
