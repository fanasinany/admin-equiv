"use client";
import React, { useState } from "react";
import "./style.scss";
import Generalite from "./Generalite";
import Demandeur from "./Demandeur";
import Etablissement from "./Etablissement";

const FaqTabs = () => {
  const [tabsActive, setTabsActive] = useState(1);
  return (
    <div className="tabs-wrapper">
      <div className="tabs-header">
        <div
          onClick={() => setTabsActive(1)}
          className={`${tabsActive === 1 ? "active" : ""}`}
        >
          Généralités sur l'équivalence
        </div>
        <div
          onClick={() => setTabsActive(2)}
          className={`${tabsActive === 2 ? "active" : ""}`}
        >
          Information pour les demandeurs
        </div>
        <div
          onClick={() => setTabsActive(3)}
          className={`${tabsActive === 3 ? "active" : ""}`}
        >
          Information pour les établissements
        </div>
      </div>
      <div className="tabs-body">
        {tabsActive === 1 && <Generalite/>}
        {tabsActive === 2 && <Demandeur/>}
        {tabsActive === 3 && <Etablissement/>}
      </div>
    </div>
  );
};

export default FaqTabs;
