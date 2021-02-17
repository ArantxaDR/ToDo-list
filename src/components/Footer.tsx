import React from "react";
import tardis from "../img/tardis3.png";

function Footer() {
  return (
    <footer className=" fixed-bottom ml-3">
      Made with
      <img className="figure-img" src={tardis} alt="Icono Tardis" />
      by &copy;ArantxaDR 2021
    </footer>
  );
}

export default Footer;
