import React from 'react'

class TablaFairPlay extends React.Component {
  constructor(props) {
    super(props);

    this.fairplay = {
      id: 0,
      name: '',
      points: 0
    }

    this.state = {
      message: null
    }
  }

  loadTabla = () => {
    this.props.partidos.forEach(p => {
      p.events.forEach(e => {
        if (e.type === 'RED_CARD' || e.type === 'YELLOW_CARD') {
          const [id, points] = this.fairplay.find(i => i.id === e._id)
          let mod;
          if (id) {
            mod = this.fairplay.filter(index => index.id !== id)
            if (e.type === 'RED_CARD') {
              mod.push({
                id: id,
                name: '',
                points: points + 3
              })
            } else {
              mod.push({
                id: id,
                name: '',
                points: points + 1
              })
            }
          } else {
            let mod = this.fairplay;
            if (e.type === 'RED_CARD') {
              mod.push({
                id: id,
                name: '',
                points: 3
              })
            } else {
              mod.push({
                id: id,
                name: '',
                points: 1
              })
            }
          }
          this.fairplay = mod;
        }
      });
    });
    //para que ordene descendente por puntos
    this.goleadores.sort((a, b) => {
      return a.points + b.points;
    })
    console.log(this.goleadores)
  }

  render() {
    return <table>
      <thead>
        <th>

        </th>
      </thead>
      <tbody>

      </tbody>
    </table>
  }
}

export default TablaFairPlay;