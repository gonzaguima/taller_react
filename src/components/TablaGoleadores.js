import React from 'react'

class TablaGoleadores extends React.Component {
  constructor(props) {
    super(props);

    this.goleadores = []

    this.state = {
      message: null
    }
  }

  getGoleador = g => {
    for (let i = 0; i < this.goleadores.length; i++) {
      const e = this.goleadores[i];
      if (g.playerId === e.id) {
        return e;
      }
    }
    return { id: false, goles: 0 };
  }

  loadTabla = () => {
    this.props.partidos.forEach(p => {
      p.events.forEach(e => {
        if (e.type === 'GOAL') {
          console.log(e)
          // const [id, goles] = this.goleadores.find(i => i.id === e.playerId);

          const { id, goles } = this.getGoleador(e);

          let mod = this.goleadores;
          if (id) {
            mod = mod.filter(index => index.id !== id);
            let g = {
              id: id,
              name: '',
              goles: goles + 1
            }
            mod.push(g);
          } else {
            let g = {
              id: e.playerId,
              name: '',
              goles: 1
            }
            mod.push(g);
          }
          this.goleadores = mod;
        }
      });
    });
    //para que ordene por goles
    this.goleadores.sort((a, b) => {
      return a.goles - b.goles;
    })
    console.log(this.goleadores)
  }

  listGoleadores = () => {
    console.log(this.goleadores)
    return (
      this.goleadores.map(e => {
        return <p>{e.name}{e.goles}</p>
      })
    );
  }

  render() {
    return (
      <div className='d-flex flex-column justify-content-center mt-5 pt-5'>
        <button onClick={this.loadTabla} className='btn'>Tabla Goleadores</button>
        {this.listGoleadores}
      </div>
    )
  }
}

export default TablaGoleadores