import React from 'react';

class Registro extends React.Component{
    constructor(props){
        super(props);

        this.user = props.user;
        this.pass = props.pass;
        this.state = {
            logged: false,
            pass: ''
        };
    }

    actualizarPass(event){
        event.preventDefault();
        this.setState({pass: event.target.value})
    }

    verificarPass(event){
        if(event !== this.state.pass){
            //css decir que no es valido.
        }else{
            //habilitar boton registrar
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor='user'>Usuario: </label>
                    <input type='text' name='user' />
                    <br />
                    <label htmlFor='pass'>Contraseña: </label>
                    <input type='password' name='pass' onChange={this.actualizarPass()} />
                    <br />
                    <label htmlFor='pass2'>Verifique su contraseña: </label>
                    <input type='password' name='pass2' onChange={this.verificarPass()} />
                    <input type='submit' value='Registrar' unselectable/>
                </form>
            </div>
        );
    }
}

export default Registro;