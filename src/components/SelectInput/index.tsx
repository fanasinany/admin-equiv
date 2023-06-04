"use client";
import React from "react";
import Select from "react-select";
import "./style.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    background: "#fff",
    border: "none",
    borderBottom: "1px solid #546e7a",
    borderRadius: 0,
    minHeight: "44px",
    height: "44px",
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided: any) => ({
    ...provided,
    height: "44px",
    padding: "0 6px",
  }),

  input: (provided: any) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    height: "44px",
  }),
};

const SelectInput = () => {
  return (
    <Select
      styles={customStyles}
      options={options}
      placeholder="Catégorie"
    />
  );
};

export default SelectInput;
