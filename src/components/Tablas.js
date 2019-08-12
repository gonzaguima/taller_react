import React from 'react';

class Tablas extends React.Component {
  handleChange = event => {
    //cargar la tabla
  }

  render() {
    return (
      <select className=''>
        <option selected value='0' >Seleccione una opcion</option>
        <option value='CAMPEONATO'>Tabla del campeonato</option>
        <option value='GOLEADOR'>Tabla de goleador</option>
        <option value='FAIRPLAY'>Tabla de Fair Play</option>
      </select>
    );
  }
}

export default Tablas;
