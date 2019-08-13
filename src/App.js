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
import Tablas from "./components/Tablas";
//import de router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
            {/* <Route exact path="/Login" component={Login} /> */}
            <Route exact path="/AgregarEquipo" component={Equipo} />
            <Route exact path="/Tablas" component={Tablas} />
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