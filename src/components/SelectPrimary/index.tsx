"use client";
import React, { FC } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    background: "#fff",
    border: "none",
    borderRadius: 6,
    minHeight: "60px",
    height: "60px",
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided: any) => ({
    ...provided,
    height: "60px",
    padding: "0 24px",
    fontSize: 16,
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
    height: "60px",
  }),
};

interface SelectPrimaryProps {
  placeholder: string;
  options: { value: string; label: string; }[];
  id: string|number;
}

const SelectPrimary: FC<SelectPrimaryProps> = ({ placeholder, options, id }) => {
  return (
    <Select instanceId={id}  styles={customStyles} options={options} placeholder={placeholder} />
  );
};

export default SelectPrimary;
