import React from "react";
//import logo from './logo.svg';
//import de css
import "./App.css";
//import de componentes
import Nav from "./components/Nav";
import Principal from "./components/Principal";
import Registro from "./components/Registro";
import Home from "./components/Home";
import Footer from "./components/Footer";
//import de router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//componente principal
class App extends React.Component {
  return() {
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
          </Switch>
          {/* footer */}
          <Footer />
        </div>
      </Router>
    );
  }
}
//export
export default App;
