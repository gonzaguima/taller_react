import React from "react";
import { connect } from "react-redux";

//import de css
import "./App.css";
//import de componentes
import Nav from "./components/Nav";
import Registro from "./components/Registro";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Equipo from "./components/Equipos";
import Jugadores from "./components/Jugadores";
import Tablas from "./components/Tablas";
import Eventos from "./components/Eventos";
//import de router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Principal from "./components/Principal";

//componente principal
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* barra de navegacion */}
          <Nav />
          {/* links */}
          <Switch>

            <Route exact path="/" component={Home} />

            <Route exact path="/Registro" component={Registro} />
            {this.props.user && (
              <Route exact path="/AgregarEquipo" component={Equipo} />
            )}
            <Route exact path="/AgregarJugadores" component={Jugadores} />
            {this.props.user && (
              <Route exact path="/Eventos" component={Eventos} />
            )}
            {this.props.user && (
            <Route exact path="/Tablas" component={Tablas} />
            )}
            {this.props.user && (
              <Route exact path="/Principal" component={Principal} />
            )}
          </Switch>
          {/* footer */}
          <Footer />
        </div>
      </Router>
    );
  }
}
//export

function mapStateToProps(state) {
  return {
    user: state.session.user
  }
}

export default connect(mapStateToProps)(App);