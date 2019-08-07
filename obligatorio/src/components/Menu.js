import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <Link to='./components/inicio'>Inicio</Link><br/>
                    <Link to='./components'>Campeonato</Link><br/>
                    <Link to='./components'>Equipos</Link><br/>
                    <Link to='./components'>Jugadores</Link><br/>
                    <button onClick={}>Cerrar Sesion</button>
                </ul>
            </div>
        );
    }
}

export default Menu;