import React from "react";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
import logoFlag from "../Assets/Icons/flag-1.png";
import logoMtefpls from "../Assets/Icons/MTEFPLS.png";

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
        <Link href="#">
          <Image src={logoMtefpls} alt="Logo Mtefpls" />
        </Link>
        <ul>
          <li>
            <Link href="#">Accueil</Link>
          </li>
          <li>
            <Link href="#">Outils</Link>
          </li>
          <li>
            <Link href="#">Page d'aide</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>FR</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
