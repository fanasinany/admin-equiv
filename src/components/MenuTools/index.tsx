"use client";
import React from "react";
import { MenuItem, Menu, MenuButton } from "@szhsin/react-menu";
import GridiconsChevronDown from "../Assets/Icons/GridiconsChevronDown";
import "./style.scss";

function MenuTools() {
  return (
    <Menu
      className="custom-menu"
      menuButton={
        <MenuButton className="custom-menu-button">
          Outils <GridiconsChevronDown height={20} width={20} />
        </MenuButton>
      }
    >
      <MenuItem href="#" rel="noopener noreferrer">
        Rechercher un diplôme
      </MenuItem>
      <MenuItem href="#" rel="noopener noreferrer">
        Prendre un rendez-vous
      </MenuItem>
    </Menu>
  );
}

export default MenuTools;
