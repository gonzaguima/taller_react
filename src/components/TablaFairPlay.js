import React from 'react'

class TablaFairPlay extends React.Component {
  constructor(props) {
    super(props);

    this.fairplay = []

    this.state = {
      message: null
    }
  }

  getTeam = (tId) => {
    for (let i = 0; i < this.fairplay.length; i++) {
      const e = this.fairplay[i];
      if (e.id === tId) {
        return e;
      }
    }
    return { id: false, points: 0 }
  }

  loadTabla = () => {
    this.props.partidos.forEach(p => {
      p.events.forEach(e => {
        if (e.type === 'RED_CARD' || e.type === 'YELLOW_CARD') {
          // const [id, points] = this.fairplay.find(i => i.id === e._id)
          const { id, points } = this.getTeam(e._id);
          let mod = this.fairplay;
          if (id) {
            mod = mod.filter(index => index.id !== id)
            if (e.type === 'RED_CARD') {
              let g = {
                id: id,
                name: '',
                points: points + 3
              }
              mod.push(g)
            } else {
              let g = {
                id: id,
                name: '',
                points: points + 1
              }
              mod.push(g)
            }
          } else {
            if (e.type === 'RED_CARD') {
              let g = {
                id: e._id,
                name: '',
                points: 3
              }
              mod.push(g)
            } else {
              let g = {
                id: e._id,
                name: '',
                points: 1
              }
              mod.push(g)
            }
          }
          this.fairplay = mod;
        }
      });
    });
    //para que ordene descendente por puntos
    this.fairplay.sort((a, b) => {
      return b.points - a.points;
    })
    console.log(this.fairplay)
  }

  listFairPlay = (list) => {
    list.map(e => {
      return <p>{e.id} / {e.points}</p>
    })
  }

  render() {
    return (
      <div className='d-flex flex-column justify-content-center mt-5 pt-5'>
        <button onClick={this.loadTabla} className='btn'>Tabla FairPlay</button>
        {this.listFairPlay(this.fairplay)}
      </div>
    );
  }
}

export default TablaFairPlay;