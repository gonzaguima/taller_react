import React from "react";
//import css
import "../App.css";
import { Link, Redirect } from "react-router-dom";

//componente login
class Principal extends React.Component {


  render() {
    return (
      <div>
        <h1>Gestión de campeonato</h1>
        {/* link a creacion de campeonato  */}
        <Link to="./Campeonato" type="submit">
          <button className="btn btn-primary">Crear Campeonato</button>
        </Link>
        {/* link a ingreso de resultados  */}
        <Link to="./Resultados" type="submit">
          <button className="btn btn-primary">Ingresar resultados</button>
        </Link>
        {/* link a ver clasificacion  */}
        <Link to="./Clasificacion" type="submit">
          <button className="btn btn-primary">Ver Clasificacion</button>
        </Link>
      </div>

    );
  }
}
//export
export default Principal;
