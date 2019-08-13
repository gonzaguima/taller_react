import React from "react";
//import css
import "../App.css";
import { Link, Redirect } from "react-router-dom";
import { saveUser } from '../redux/actions/userActions';
import { connect } from "react-redux";
import {loginUser} from "../services";

//componente Home, donde se crea un nuevo usuario
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "piopio@piopio.com",
      password: "piopiopiopio",
      userId: null,
      campeonatoId: null,
      confirmado: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.registrarUsuario = this.loginUsuario.bind(this);
  }

  //habilita a cambiar el estado.
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  loginUsuario = event => {
    event.preventDefault();
    const user = this.state;
    console.log(user);
      loginUser(user)
        .then(result => {
          console.log("logueado");
          console.log(result.data);
          user.campeonatoId = result.data.championship._id;
          user.confirmado = result.data.championship.isConfirmed;
          user.userId = result.data._id;
          this.props.dispatch(saveUser({ user }));
        })
        .catch(err => {
          alert("errrrrror ");
          console.log(err);
        });
      return <Home />;
  };

  render() {
    return (
      this.props.user ? (
      <Redirect
      to={{
        pathname: "/Principal",
        state: { from: this.props.user }
      }}
    />) : (
      <div className="d-flex flex-column justify-content-center mt-5 pt-5">
        <form className="m-auto w-50" onSubmit={this.loginUsuario}>
          <div className="form-group">
            <label htmlFor="emailLogin">Dirección de Email</label>
            {/* input email login */}
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Ingrese su Email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            {/* input pass login */}
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
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
      </div>)
    );
  }
}

//export

function mapStateToProps(state) {
  return {
    user: state.session.user
  }
}
export default connect(mapStateToProps)(Home);
