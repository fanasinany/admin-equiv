import React, { FC } from "react";
import "./style.scss";

interface CardServiceEquivalenceProps {
    title: string;
    description: string;
}

const CardServiceEquivalence:FC<CardServiceEquivalenceProps> = ({title, description}) => {
  return (
    <div className="card-service_wrapper">
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
    </div>
  );
};

export default CardServiceEquivalence;
