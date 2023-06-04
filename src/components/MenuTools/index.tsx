"use client";
import React from "react";
import { MenuItem, Menu, MenuButton } from "@szhsin/react-menu";

import "./style.scss";
import GridiconsChevronDown from "../Assets/Icons/GridiconsChevronDown";
import Link from "next/link";

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
      <MenuItem>
        <Link href="/search-degree">Rechercher un diplôme</Link>
      </MenuItem>
      <MenuItem>
        <Link href="#">Prendre un rendez-vous</Link>
      </MenuItem>
    </Menu>
  );
}

export default MenuTools;
