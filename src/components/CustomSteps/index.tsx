"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import dynamic from "next/dynamic";

function getCurrentDimension() {
  return window.innerWidth;
}

const StepperComponent = dynamic(() => import("../CustomStepper"), {
  ssr: false,
});

const CustomSteps = () => {
  const [widthSize, setWidthSize] = useState(1000);

  useEffect(() => {
    const updateDimension = () => {
      setWidthSize(getCurrentDimension());
    };
    updateDimension(); // Set initial value

    // Only add event listener in the browser environment
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDimension);

      return () => {
        window.removeEventListener("resize", updateDimension);
      };
    }
  }, []);
  return (
    <React.Fragment>
      {widthSize > 780 ? (
        <StepperComponent />
      ) : (
        <div className="verticalStepper">
          <div className="steps">
            <span>1</span>
            Se renseigner
          </div>
          <div className="line"></div>
          <div className="steps">
            <span>2</span>
            Constituer les dossiers
          </div>
          <div className="line"></div>
          <div className="steps">
            <span>3</span>
            Déposer la demande Porte 107 du MTEFPLS 08h à 12h
          </div>
          <div className="line"></div>
          <div className="steps">
            <span>4</span>
            Récupérer l'équivalence Porte 122 du MTEFPLS 13h à 15h
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CustomSteps;
