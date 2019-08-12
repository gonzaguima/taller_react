import React from 'react';
import { ACTIONS } from './../constants'
import tablaCampeonato from './TablaCampeonato';
import tablaGoleador from './TablaGoleadores';
import tablaFairPlay from './TablaFairPlay'
import { getChampionship } from '../services';

class Tablas extends React.Component {
  selectChange = event => {
    switch (event.tarjet.value) {
      case ACTIONS.CAMPEONATO:
        getChampionship(/* pasar id campeonato */).then(result => {
          tablaCampeonato(result);
        }).catch(err => {
          alert('Algo salio mal :(')
        })

        break;
      case ACTIONS.GOLEADOR:
        getChampionship(/* pasar id campeonato */).then(result => {
          tablaGoleador(result);
        }).catch(err => {
          alert('Algo salio mal :(')
        })

        break;
      case ACTIONS.FAIRPLAY:
        getChampionship(/* pasar id campeonato */).then(result => {
          tablaFairPlay(result);
        }).catch(err => {
          alert('Algo salio mal :(')
        })

        break;
      default:
        break;
    }
  }

  render() {
    return (
      <select className='' onChange={this.selectChange}>
        <option selected value='0' >Seleccione una opcion</option>
        <option value={ACTIONS.CAMPEONATO}>Tabla del campeonato</option>
        <option value={ACTIONS.GOLEADOR}>Tabla de goleador</option>
        <option value={ACTIONS.FAIRPLAY}>Tabla de Fair Play</option>
      </select>
    );
  }
}

export default Tablas;
