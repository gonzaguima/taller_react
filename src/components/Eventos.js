import React from "react";
//import css
import "../App.css";
import { connect } from "react-redux";
import { getChampionship } from "../services";

class Eventos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null
    };
    //this.getChampionship = this.getChampionship;

  }

  loadTableMatch = () => {
    let cId = this.props.user.user.campeonatoId;
    getChampionship(cId).then(result => {
      result.data.map(m => {
        return <tr>
          <td>{m.team1.id}</td>
          <td>{m.team2.id}</td>
        </tr>
      })
    }).catch(err => {
      alert('Opss')
    })
  }

  render() {
    return (
      <div className=" justify-content-center mt-5 pt-5">
        <table className='table-striped'>
          <thead><tr>
            <th>Local</th>
            <th>Visitante</th>
          </tr></thead>
          <tbody>{this.loadTableMatch()}</tbody>

        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.session.user
  };
}
export default connect(mapStateToProps)(Eventos);
