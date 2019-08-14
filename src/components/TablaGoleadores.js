import React from 'react'

class TablaGoleadores extends React.Component {
  constructor(props) {
    super(props);

    this.goleadores = {
      id: 0,
      name: '',
      goles: 0
    }

    this.state = {
      message: null
    }
  }

  loadTabla = () => {
    this.props.partidos.forEach(p => {
      p.events.forEach(e => {
        if (e.type === 'GOAL') {
          const [id, goles] = this.goleadores.find(i => i.id === e.playerId)
          let mod;
          if (id) {
            mod = this.goleadores.filter(index => index.id !== id)
            mod.push({
              id: id,
              name: '',
              goles: goles + 1
            })
          } else {
            mod = this.goleadores;
            mod.push({
              id: e.playerId,
              name: '',
              goles: 1
            })
          }
          this.goleadores = mod
        }
      });
    });
    //para que ordene por goles
    this.goleadores.sort((a, b) => {
      return a.goles - b.goles;
    })
    console.log(this.goleadores)
  }

  render() {
    return (
      <table className='table-striped'>
        <button onClick={this.loadTabla}>Tabla Goleadores</button> 
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Goles</th>
          </tr>
        </thead>
        <tbody>
          {/*this.goleadores.map(e => {
            <tr>
              <td>{e.name}</td>
              <td>{e.goles}</td>
            </tr>
          })*/}
        </tbody>
      </table>
    )
  }
}
export default TablaGoleadores