"use client";
import React, { useState } from "react";
import { MenuItem, Menu, MenuButton } from "@szhsin/react-menu";
import "./style.scss";
import Image from "next/image";
import frFlag from "../Assets/Images/fr.png";
import mgFlag from "../Assets/Images/mg.png";

const MenuLang = () => {
  const [isFrench, setIsFrench] = useState(true);

  function French() {
    return (
      <React.Fragment>
        FR <Image src={frFlag} alt="French Flag" />
      </React.Fragment>
    );
  }

  function Malgache() {
    return (
      <React.Fragment>
        MG <Image src={mgFlag} alt="Madagascar Flag" />
      </React.Fragment>
    );
  }
  return (
    <Menu
      className="custom-menu-lang"
      menuButton={
        <MenuButton className="custom-menu-button-lang">
          {isFrench ? <French /> : <Malgache />}
        </MenuButton>
      }
    >
      <MenuItem onClick={() => setIsFrench((current) => !current)}>
        {!isFrench ? <French /> : <Malgache />}
      </MenuItem>
    </Menu>
  );
};

export default MenuLang;
