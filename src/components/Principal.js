import React from "react";
//import css
import "../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { confirmChampionship } from "../services";
//componente login
class Principal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null
    };
  }

  confirmChampionship = () =>{

    const id = this.props.user.user.userId;
    console.log(id);
    confirmChampionship(id)
      .then(result => {
        this.props.user.user.confirmado = true;
        console.log(result.data);
      })
      .catch(err => {
        alert("La cantidad de equipos es menor a 5");
        console.log(err);
      });
    return <Principal />;
  }

  render() {

    return (
      <div className=" justify-content-center mt-5 pt-5">
        <h1>Gestión de campeonato</h1>
        {/* link a creacion de campeonato  */}
        <Link to="./AgregarEquipo" type="submit">
          <button className="btn btn-primary">Crear Campeonato</button>
        </Link>
        {/* link a ingreso de resultados  */}
        <Link to="./Eventos" type="submit">
          <button className="btn btn-primary">Ingresar resultados</button>
        </Link>
        {/* link a ver clasificacion  */}
        <Link to="./Clasificacion" type="submit">
          <button className="btn btn-primary">Ver Clasificacion</button>
        </Link>
        <br />
        <span>El campeonato esta </span>
        {this.props.user.user.confirmado ? (
          <span>confirmado</span>
        ) : (
          <span>
            sin confirmar
            <button
              className="btn btn-success ml-4"
              onClick={this.confirmChampionship}
            >
              Confirmar campeonato
            </button>
          </span>
        )}
      </div>
    );
  }
}
//export
//export default Principal;

function mapStateToProps(state) {
  return {
    user: state.session.user,
  };
}
export default connect(mapStateToProps)(Principal);