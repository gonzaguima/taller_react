import React from 'react';
import Registro from './registro'

class Login extends React.Component{
    constructor(props){
        super(props);

        this.user = props.user;
        this.pass = props.pass;
        this.state = {
            logged: false
        };
    }

    clickRegistro(){
        return <Registro/>
    }

    render() {
        return(
            <div>
                <label>Usuario: </label>
                <input type='text' placeholder='Ingrese su nombre de usuario...' />
                <label>Contraseña: </label>
                <input type='password' placeholder='Ingrese su contraseña...' />
                <button onClick={this.clickRegistro}>No tengo cuenta :(</button>
            </div>
        );
    }
}

export default Login