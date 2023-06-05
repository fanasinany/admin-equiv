"use client";
import React from "react";
import { Stepper, Step } from "react-form-stepper";
import "./style.scss";

const CustomStepper = () => {
  const styleConfigCustom: any = {
    activeBgColor: "#d0edff",
    completedBgColor: "#d0edff",
    activeTextColor: "#546e7a",
    completedTextColor: "#546e7a",
    circleFontSize: "18px",
    labelFontSize: "18px",
    fontWeight: 700,
    size: "66px",
  };

  const connectorConfigCustom: any = {
    activeColor: "#d0edff",
    completedColor: "#d0edff",
    disabledColor: "#d0edff",
    size: "4px",
  };
  return (
    <Stepper
      className="custom-stepper-container"
      stepClassName="custom-step-stepper"
      activeStep={4}
      styleConfig={styleConfigCustom}
      connectorStyleConfig={connectorConfigCustom}
    >
      <Step className="custom-step" label="Se renseigner" />
      <Step className="custom-step" label="Constituer les dossiers" />
      <Step
        className="custom-step"
        label="Déposer la demande Porte 107 du MTEFPLS 08h à 12h"
      />
      <Step
        className="custom-step"
        label="Récupérer l'équivalence Porte 122 du MTEFPLS 13h à 15h"
      />
    </Stepper>
  );
};

export default CustomStepper;
