import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
  
class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLogged: true
        }
    }
    render(){
return(
    !this.state.isLogged ? <Redirect to='/login' />
    :<div>
        HOME
    </div>
)
    }
}

export default Home;