import React from 'react'

class Jugadores extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      lastName: '',
      birthDate: '',
      number: 0
    }
  }

  //habilita a cambiar el estado.
  handleChange = event => {
    if (event.target.name === 'number') {
      this.setState({ [event.target.name]: parseInt(event.target.value)})
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  addPlayers = () => {
    this.props.handleAddPlayer(this.state)
    // this.setState(
    //   this.name = '',
    //   this.lastName = '',
    //   this.birthDate = '',
    //   this.number = '')
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center mt-5 pt-5">
      <div className="m-auto ">
        <div className='form-group'>
          <label htmlFor='playerName'>Nombre del jugador</label>
          <input type='text'
          name='name'
          onChange={this.handleChange}
          className="form-control"
          placeholder='Ingrese nombre de su jugador' />
        </div>
        <div className='form-group'>
          <label htmlFor='playerLastName'>Apellido del jugador</label>
          <input type='text'
          name='lastName'
          onChange={this.handleChange}
          className="form-control"
          placeholder='Ingrese apellido de su jugador' />
        </div>
        <div className='form-group'>
          <label htmlFor='playerBirth'>Fecha de nacimiento del jugador</label>
          <input type='date'
          name='birthDate'
          onChange={this.handleChange}
          className="form-control"
          placeholder='Ingrese fecha de nacimiento de su jugador' />
        </div>
        <div className='form-group'>
          <label htmlFor='number'>Numero del jugador</label>
          <input type='number'
          name='number'
          onChange={this.handleChange}
          className="form-control"
          placeholder='Ingrese numero de su jugador' />
        </div>
        <input type='button' onClick={this.addPlayers} className="btn" value='Agregar equipo' />
      </div>
      </div>
    );
  }
}

export default Jugadores;