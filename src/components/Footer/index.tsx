import React from "react";
import "./style.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footerWrapper">
        <div className="blocMenu">
          <ul>
            <li className="title">Plan du site</li>
            <li>
              <Link href="#">Accueil</Link>
            </li>
            <li>
              <Link href="#">Outil</Link>
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
          </ul>
          <ul>
            <li className="title">Liens utiles</li>
            <li>
              <Link href="https://mtefpls.gov.mg">mtefpls.gov.mg</Link>
            </li>
            <li>
              <Link href="https://torolalana.gov.mg">torolalana.gov.mg</Link>
            </li>
          </ul>
          <ul>
            <li className="title">Réseaux sociaux</li>
            <li>
              <Link href="https://mtefpls.gov.mg">Facebook</Link>
            </li>
            <li>
              <Link href="https://torolalana.gov.mg">LinkedIn</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="copyright">
          Copyright © 2023, MTEFPLS | Mentions légales | Condition générale
          d'utilisation
        </div>
      </div>
    </footer>
  );
};

export default Footer;
