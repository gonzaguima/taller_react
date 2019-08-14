import React from 'react'

class TablaCampeonato extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null
    }
  }

  render() {
    return (
      <div className='d-flex flex-column justify-content-center mt-5 pt-5'>
        <button onClick={this.loadTabla} className='btn'>Tabla Campeonato</button>
        {this.listGoleadores}
      </div>
    );
  }
}

export default TablaCampeonato;