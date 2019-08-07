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
                <form>
                    <label htmlFor='user'>Usuario: </label>
                    <input type='text' name='user' placeholder='Ingrese su nombre de usuario...' />
                    <br/>
                    <label htmlFor='pass'>Contraseña: </label>
                    <input type='password' name='pass' placeholder='Ingrese su contraseña...' />
                    <br/>
                    <input type='submit' value='Ingresar' />
                </form>
                <button onClick={this.clickRegistro()}>No tengo cuenta :(</button>
            </div>
        );
    }
}

export default Login;