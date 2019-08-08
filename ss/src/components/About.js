import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
  
class About extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLogged: false
        }
    }
    render(){
return(
    <div>
        ABOUT
        <button
          onClick={() => {
            this.props.history.push("/login");
          }}
        >
          Go to login
        </button>
    </div>
)
    }
}

export default withRouter(About);