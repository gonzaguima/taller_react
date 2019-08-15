import React from 'react'
import { getTeam } from '../services';

class TablaCampeonato extends React.Component {
  constructor(props) {
    super(props);

    this.campeonato = [{
      _id: 0,
      point: 0,
      gFav: 0,
      gCont: 0,
      gDif: 0
    }]

    this.state = {
      message: null
    }
  }

  getTeams = (p) => {
    let t1, t2;
    getTeam(p.team1.id).then(result => {
      console.log(result.data)
      t1 = result.data;
    }).catch(err => console.log(err));
    getTeam(p.team2.id).then(result => {
      console.log(result.data)
      t2 = result.data;
    }).catch(err => console.log(err));

    return { t1, t2 }
  }

  cargarGoles = (p) => {
    let goles = {};
    p.events.forEach(e => {
      if (e.type === 'GOAL') {
        goles.push(e.playerId)
      }
    })
  }

  loadTabla = () => {
    this.props.partidos.forEach(p => {
      if (p.events.length > 0) {
        Promise.all([getTeam(p.team1.id), getTeam(p.team2.id)]).then(values => {
          const t1 = values[0].data, t2 = values[1].data

          //obtengo la info completa de los equipos
          //carga todos los goles del partido
          const goles = this.cargarGoles(p);
          let t1Goles, t2Goles, t1Point, t2Point;
          //separo los goles de cada uno
          console.log(t1)
          t1.players.forEach(j => {
            if (goles)
              t1Goles = goles.filter(gol => gol.playerId === j._id)
          });
          t2.players.forEach(j => {
            if (goles)
              t2Goles = goles.filter(gol => gol.playerId === j._id)
          })
          //repartir puntos
          if (t1Goles < t2Goles) t2Point = 3
          else if (t1Goles > t2Goles) t1Point = 3
          else {
            t1Point = 1
            t2Point = 1
          }
          //sumarlos al campeonato
          let m
          let modT1 = this.campeonato.find(team => team.id === t1._id)
          if (modT1) {
            m = this.campeonato.filter(team => team.id !== modT1._id)
            modT1 = {
              _id: modT1._id,
              point: modT1.point + t1Point,
              gFav: modT1.gFav + t1Goles,
              gCont: modT1.gCont + t2Goles,
              gDif: modT1.gDif + (t1Goles - t2Goles)
            }
          } else {
            modT1 = {
              _id: t1._id,
              point: t1Point,
              gFav: t1Goles,
              gCont: t2Goles,
              gDif: (t1Goles - t2Goles)
            }
          }
          m.push(modT1)
          this.setState({ campeonato: m })

          let modT2 = this.campeonato.find(team => team.id === t2._id)
          if (modT2) {
            m = this.campeonato.filter(team => team.id !== modT2._id)
            modT2 = {
              _id: modT2._id,
              point: modT2.point + t2Point,
              gFav: modT2.gFav + t2Goles,
              gCont: modT2.gCont + t1Goles,
              gDif: modT2.gDif + (t2Goles - t1Goles)
            }
          } else {
            modT1 = {
              _id: t2._id,
              point: t2Point,
              gFav: t2Goles,
              gCont: t1Goles,
              gDif: (t2Goles - t1Goles)
            }
          }
          m.push(modT2)
          this.setState({ campeonato: m })
        });
      }
    });

    console.log(this.campeonato)
  }

  render() {
    return (
      <div className='d-flex flex-column justify-content-center mt-5 pt-5'>
        <button onClick={this.loadTabla} className='btn'>Tabla Campeonato</button>

      </div>
    );
  }
}

export default TablaCampeonato;