import React from 'react';
// import { ACTIONS } from './../constants'
import TablaCampeonato from './TablaCampeonato';
import TablaGoleadores from './TablaGoleadores';
import TablaFairPlay from './TablaFairPlay';
import { getChampionship } from '../services';
import { connect } from "react-redux";
import { isNull } from 'util';

class Tablas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null
    }
  }

  // selectChange = event => {
  //   switch (event.tarjet.value) {
  //     case ACTIONS.CAMPEONATO:

  //       break;
  //     case ACTIONS.GOLEADOR:

  //       break;
  //     case ACTIONS.FAIRPLAY:

  //       break;
  //     default:
  //       break;
  //   }
  // }

  cargarPartidos = () => {
    getChampionship(this.props.user.user.campeonatoId).then(result => {
      console.log(result)
      this.setState({ message: result.data })
    })
    console.log(this.state.message)
  }

  render() {
    if (isNull(this.state.message)) {
      {this.cargarPartidos()}
    }
    return (
      <div className=" justify-content-center mt-5 pt-5">
        <TablaCampeonato partidos={this.state.message}></TablaCampeonato>
        <TablaGoleadores partidos={this.state.message}></TablaGoleadores>
        <TablaFairPlay partidos={this.state.message}></TablaFairPlay>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.session.user
  };
}

export default connect(mapStateToProps)(Tablas);
