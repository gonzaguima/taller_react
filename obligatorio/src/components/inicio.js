import React from 'react'
import Menu from "./components/Menu";
import Header from "./components/Header";
import Nosotros from "./components/Nosotros";
// import NoMatch from "./components/NoMatch";

class Inicio extends React.Component {
    constructor(props){
        super(props);

        // this.state
    }

    render() {
        return (
            <Router>
                <Menu/>
                <Header/>
                <Route path='/nosotros' component={Nosotros}/>
            </Router>
        );
    }
}

export default Inicio;