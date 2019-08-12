import React from 'react';
import { createTeam } from '../services';

class Equipo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      primaryColor: '',
      secondaryColor: '',
      players: [{
        name: '',
        lastName: '',
        birthDate: '',
        number: 0
      }] //Minimo 5, Maximo 10
    }
  }

  //agrega jugador al state
  addPlayer = event => {
    let jugadores = this.state.players;
    //verificar que no se repita el numero
    //ver como poner varios jugadores en el state
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
        <form className="m-auto w-50">
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

          <div id='jugadores'>
            <div className='form-group'>
              <label htmlFor='playerName'>Nombre del jugador</label>
              <input type='text' name='name' id='playerName' className="form-control" placeholder='Ingrese nombre de su jugador' />
            </div>
            <div className='form-group'>
              <label htmlFor='playerLastName'>Apellido del jugador</label>
              <input type='text' name='lastName' id='playerLastName' className="form-control" placeholder='Ingrese apellido de su jugador' />
            </div>
            <div className='form-group'>
              <label htmlFor='playerBirth'>Fecha de nacimiento del jugador</label>
              <input type='date' name='birthDate' id='playerBirth' className="form-control" placeholder='Ingrese fecha de nacimiento de su jugador' />
            </div>
            <div className='form-group'>
              <label htmlFor='number'>Numero del jugador</label>
              <input type='text' name='number' id='number' className="form-control" placeholder='Ingrese numero de su jugador' />
            </div>
          </div>
          <input type='button' onClick={this.addPlayer()} className="btn btn-success" value='Agregar jugador' />

          {/* boton enviar signup */}
          <button type="submit" className="btn btn-success">
            Siguiente ->
          </button>
        </form>
      </div>
    );
  }
}

export default Equipo;