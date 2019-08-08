import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLogged: true
        }
    }
    render(){
return(
    this.state.isLogged ? <Redirect to='/' />
    :<div>
        LOGIN
    </div>
)
    }
}

export default Login;