import React from "react";
//import css
import "../App.css";
//import links
import { Link } from "react-router-dom";

//componente barra de navegacion
class Nav extends React.Component {
  render() {
    //estilos de nav
    const navStyle = {
      color: "white"
    };
    return (
      <nav className="nav ">
        <h3>
          Chalk / <small>Gestión de Campeonatos</small>
        </h3>

        <ul className="navLinks">
          <Link style={navStyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={navStyle} to="/Registro">
            <li>Registro</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

//export
export default Nav;
