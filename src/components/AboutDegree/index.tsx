"use client";
import React, { useState } from "react";
import "./style.scss";
import SelectPrimary from "../SelectPrimary";

const AboutDegree = () => {
  const listLevel = [
    { value: "doctorat", label: "Doctorat" },
    { value: "master", label: "Master" },
    { value: "licence", label: "Licence" },
  ];

  const listFormation = [
    { value: "informatique", label: "Informatique" },
    { value: "droit", label: "Droit" },
    { value: "economie", label: "Economie" },
    { value: "science", label: "Science Sociale" },
  ];

  const [isPrivate, setIsPrivate] = useState(true);

  return (
    <React.Fragment>
      <div className="checkboxWrapper">
        <div className="ckeckbox-with-label">
          <input
            id="public"
            type="radio"
            name="degree"
            checked={!isPrivate}
            onChange={() => setIsPrivate(false)}
          />
          <label htmlFor="public">
            <span className="checkmark"></span>Diplôme/certificat public
          </label>
        </div>
        <div className="ckeckbox-with-label">
          <input
            id="private"
            type="radio"
            name="degree"
            checked={isPrivate}
            onChange={() => setIsPrivate(true)}
          />
          <label htmlFor="private">
            <span className="checkmark"></span>Diplôme/certificat privée
          </label>
        </div>
      </div>
      <div className="inputWrapper">
        <input
          className="primary-input"
          type="text"
          placeholder="Etablissement émetteur du diplôme ou certificat"
        />
        <span className="note">
          Veuillez saisir les trois premier lettre du nom de l'établissement et
          choisir parmi les propositions
        </span>
        {isPrivate && (
          <SelectPrimary
            id="listformation"
            placeholder="Nom de la formation ou filière"
            options={listFormation}
          />
        )}
        <SelectPrimary
          id="listlevel"
          placeholder="Niveau"
          options={listLevel}
        />
      </div>
      <div>
        <button type="submit" className="green-button">
          Rechercher
        </button>
      </div>
    </React.Fragment>
  );
};

export default AboutDegree;
