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
      emailSignup: '',
      nameSignup: '',
      passSignup: '',
      passRepSignup: ''
    }
  }

  //habilita a cambiar el estado.
  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const user = this.state;
    if (user.passSignup === user.passRepSignup) {
      registroUser(user).then(result => {
        alert('ESSITOO!!')
        console.log(result);
      }).catch(err => {
        alert('Not today')
        console.log(err);
      })
    } else {
      return <Registro />
    }
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center mt-5 pt-5">
        <form className="m-auto w-50">
          <div className="form-group">
            <label htmlFor="emailSignup">Dirección de Email</label>
            {/* input email signup */}
            <input
              type="email"
              className="form-control"
              id="emailSignup"
              name="emailSignup"
              placeholder="Ingrese su Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="nameSignup">Nombre y Apellido</label>
            {/* input nombre signup */}
            <input
              type="input"
              className="form-control"
              id="nameSignup"
              name="nameSignup"
              placeholder="Ingrese su Nombre completo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passSignup">Contraseña</label>
            {/* input pass signup */}
            <input
              type="password"
              className="form-control"
              id="passSignup"
              placeholder="Cree una nueva Contraseña"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passRepSignup">Repita la Contraseña</label>
            {/* input pass signup */}
            <input
              type="password"
              className="form-control"
              id="passRepSignup"
              placeholder="Ingrese de nuevo su contraseña"
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
