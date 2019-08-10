import React from "react";
//import css
import "../App.css";
import { Link } from "react-router-dom";
import { loginUser } from './../services';

//componente Home, donde se crea un nuevo usuario
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailLogin: '',
      passLogin: ''
    }
  }

  //habilita a cambiar el estado.
  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    loginUser(...this.state)
      .then(result => { console.log(result); }
      ).catch(err => { console.log(err) });
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center mt-5 pt-5">
        <form className="m-auto w-50">
          <div className="form-group">
            <label htmlFor="emailLogin">Dirección de Email</label>
            {/* input email login */}
            <input
              type="email"
              className="form-control"
              id="emailLogin"
              name="emailLogin"
              placeholder="Ingrese su Email"
            />
          </div>
          <div class="form-group">
            <label htmlFor="passLogin">Contraseña</label>
            {/* input pass login */}
            <input
              type="password"
              className="form-control"
              id="passLogin"
              name="passLogin"
              placeholder="Contraseña"
            />
          </div>
          {/* boton enviar login */}
          <button type="submit" className="btn btn-success">
            Ingresar
        </button>
        </form>

        <div className="mr-auto ml-auto mt-4 w-50">
          <small>O crea una nueva cuenta</small>
          <br />

          {/* boton ir a registro */}
          <Link to="/Registro">
            <button type="submit" className="btn btn-light">
              Crear cuenta
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

//export
export default Home;
