import React from 'react';
import { createTeam } from '../services';
import Jugadores from './Jugadores';

class Equipo extends React.Component {
  constructor(props) {
    super(props);

    this.addingPlayer = false;

    this.state = {
      name: '',
      primaryColor: '',
      secondaryColor: '',
      players: [
        {
          name: '',
          lastName: '',
          birthDate: '',
          number: 0
        }
      ] //Minimo 5, Maximo 10
    }
  }

  //agrega jugador al state
  handleAddPlayer = player => {
    let playersMod = this.state.players;
    playersMod.push(player);
    this.setState(this.players = playersMod);
    console.log(this.state.players)
  }

  listJugadores = () => {
    return (
      <option>
        {this.state.players.map(j => j.name + ' ' + j.lastName)}
      </option>
    );
  }

  //habilita a cambiar el estado.
  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  onSubmit = () => {
    if (this.state.players.length < 5) {
      alert('Tiene que tener un minimo de 5 jugadores!')
    } else {
      createTeam(this.state).then = result => (
        console.log(result)
      ).catch = err => (
        console.log(err)
      );
    }
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center mt-5 pt-5">
        <form className="m-auto w-50" onSubmit={this.onSubmit}>
          <div id='equipo'>{/* Datos del equipo */}
            <div className="form-group">
              <label htmlFor="name">Nombre del equipo</label>
              {/* input email signup */}
              <input
                type="text"
                className="form-control"
                id="teamName"
                name="name"
                placeholder="Ingrese nombre del equipo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="primaryColor">Color primario</label>
              {/* input nombre signup */}
              <input
                type="input"
                className="form-control"
                id="teamFirstColor"
                name="primaryColor"
                placeholder="Ingrese el primer color"
              />
            </div>
            <div className="form-group">
              <label htmlFor="secondaryColor">Color secundario</label>
              {/* input pass signup */}
              <input
                type="text"
                className="form-control"
                id="teamSecondColor"
                name="secondaryColor"
                placeholder="Ingrese el segundo color"
              />
            </div>
          </div>{/*fin datos de equipo*/}
          <select>
            {this.listJugadores}
          </select>
          <Jugadores handleAddPlayer={this.handleAddPlayer}></Jugadores>

          {/* boton enviar signup */}
          <button type="submit" className="btn btn-success">
            Confirmar equipo
          </button>
        </form>
      </div >
    );

  }
}

export default Equipo;