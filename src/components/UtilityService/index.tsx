"use client";
import React, { useState, useEffect } from "react";
import "./style.scss";
import CardServiceEquivalence from "../CardServiceEquivalence";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const UtilityService = () => {
  const [items, setItems] = useState([
    {
      title: "Recrutement dans l'administration publique",
      description: "Pour les personnes souhaitant devenir agent de l'Etat",
    },
    {
      title: "Reclassement des agents de l'Etat",
      description:
        "pour les fonctionnaires souhaitant avoir une promotion grâce à l'acquisition d'un diplôme ou d'un certificat",
    },
    {
      title: "Intégration des agents non encadrés de l'Etat",
      description:
        "Pour les agents non encadrés de l'Etat qui souhaitent devenir fonctionnaires",
    },
    {
      title: "Participation aux concours administratifs",
      description: "Pour les candidats aux différents concours administratifs",
    },
    {
      title: "Sélection pour les bourses extérieures",
      description:
        "Pour les candidats souhaitant candidater pour les bourses extérieures au niveau du Connabex",
    },
    {
      title: "Référence pour le secteur privé",
      description:
        "Pour certaines entreprises privées qui souhaite avoir une référence pour déterminer le salaire d'un travailleur",
    },
  ]);
  /* get windows width */
  function getCurrentDimension() {
    return window.innerWidth;
  }
  const [widthSize, setWidthSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setWidthSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [widthSize]);

  return (
    <React.Fragment>
      {widthSize > 560 ? (
        <div className="serviceWrapperWeb">
          {items.map((item, index) => {
            return (
              <CardServiceEquivalence
                key={index}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      ) : (
        <div className="swipper-wrapper">
          <Swiper spaceBetween={5} slidesPerView={1.2}>
            {items.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <CardServiceEquivalence
                    title={item.title}
                    description={item.description}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </React.Fragment>
  );
};

export default UtilityService;
