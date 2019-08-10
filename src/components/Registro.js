import React from "react";
//import css
import "../App.css";
//import services
import { registroUser } from './../services'

//componente registro, donde se crea un nuevo usuario
class Registro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: '',
      passRep: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.registrarUsuario = this.registrarUsuario.bind(this);
  }

  //habilita a cambiar el estado.

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value
    });
  }

  registrarUsuario = event => {
    event.preventDefault();
    const user = this.state;
    console.log(user);

    if (user.password === user.passRep) {
      delete user.passRep;
    console.log(user);
      registroUser(user).then(result => {
        alert('ESSITOO!!')
        console.log(result);
      }).catch(err => {
        alert('Not today')
      })
    } else {
      console.log("contraseña distinta");
      return <Registro />
    }
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center mt-5 pt-5">
        <form className="m-auto w-50" onSubmit={this.registrarUsuario}>
          <div className="form-group">
            <label htmlFor="email">Dirección de Email</label>
            {/* input email signup */}
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value = {this.state.email}
              placeholder="Ingrese su Email"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombre y Apellido</label>
            {/* input nombre signup */}
            <input
              type="input"
              className="form-control"
              id="name"
              name="name"
              value = {this.state.name}
              placeholder="Ingrese su Nombre completo"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            {/* input pass signup */}
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value = {this.state.password}
              placeholder="Cree una nueva Contraseña"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passRep">Repita la Contraseña</label>
            {/* input pass signup */}
            <input
              type="password"
              className="form-control"
              id="passRep"
              name = "passRep"
              value = {this.state.passRep}
              placeholder="Ingrese de nuevo su contraseña"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          {/* boton enviar signup */}
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
        </form>
      </div>
    );
  }
}
//export
export default Registro;
