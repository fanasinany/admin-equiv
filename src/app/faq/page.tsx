import React from "react";
import styles from "./faq.module.scss";
import MaterialSymbolsSearchRounded from "@/components/Assets/Icons/MaterialSymbolsSearchRounded";
import FaqTabs from "@/components/FaqTabs";

export const metadata = {
  title: "FAQ",
};

const Faq = () => {
  return (
    <section className={styles.faq}>
      <h1>FOIRE AUX QUESTIONS</h1>
      <div className={styles.faqContainer}>
        <div className={styles.searchInput}>
          <input type="text" placeholder="Rechercher" />
          <button>
            <MaterialSymbolsSearchRounded />
          </button>
        </div>
        <p>
          Vous pouvez entrer un mot clé dans la barre de recherche ou parcourir
          les questions suivantes pour avoir les réponses à vos questions.
        </p>
        <FaqTabs />
      </div>
    </section>
  );
};

export default Faq;
