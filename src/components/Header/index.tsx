import React from "react";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
import logoFlag from "../Assets/Images/flag-1.png";
import logoMtefpls from "../Assets/Images/MTEFPLS.png";
import RadixIconsHamburgerMenu from "../Assets/Icons/RadixIconsHamburgerMenu";
import MenuTools from "../MenuTools";

const Header = () => {
  return (
    <header className="headerWrapper">
      <div className="topNav">
        <div>
          <Image src={logoFlag} alt="Logo Flag" />
          Site web de confiance appartenant au domaine “<span>.gov.mg</span>”
        </div>
        <div>
          <Link href="#">Suggérer des fonctionnalités</Link>
          <Link href="#">Signaler un bug</Link>
        </div>
      </div>
      <nav>
        <Link href="#" className="title-and-logo">
          <Image src={logoMtefpls} alt="Logo Mtefpls" />
          <span className="title-mobile">
            SERVICE DES EQUIVALENCES <br /> ADMINISTRATIVES ET TITRES
          </span>
        </Link>
        <ul>
          <li>
            <Link href="#">Accueil</Link>
          </li>
          <li className="outils-dropdown">
            <MenuTools/>
          </li>
          <li>
            <Link href="#">Page d&apos;aide</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>FR</li>
        </ul>
        <span className="burger-menu">
          <RadixIconsHamburgerMenu height={16} width={16} />
        </span>
      </nav>
    </header>
  );
};

export default Header;
