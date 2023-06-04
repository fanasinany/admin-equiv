"use client";
import React from "react";
import { MenuItem, Menu, MenuButton } from "@szhsin/react-menu";

import "./style.scss";
import GridiconsChevronDown from "../Assets/Icons/GridiconsChevronDown";

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
      <MenuItem href="/search-degree" rel="noopener noreferrer">
        Rechercher un diplôme
      </MenuItem>
      <MenuItem href="#" rel="noopener noreferrer">
        Prendre un rendez-vous
      </MenuItem>
    </Menu>
  );
}

export default MenuTools;
