import React from "react";
//import css
import "../App.css";


import { connect } from "react-redux";
import { getChampionship } from "../services";
class Eventos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
      isHidden: true,
      addEvent: null
    };
    this.getChampionship = this.getChampionship.bind(this);
  }

  toggleHidden(e) {
      const id = e.target.id;
      console.log(id);

    this.setState({
      isHidden: !this.state.isHidden,
      addEvent: id
    });
  }

  getChampionship = () => {
    const asd = this.props.user.user.campeonatoId;
    console.log(asd);
    getChampionship(asd)
      .then(result => {
        this.props.user.user.partidos = result.data;
        //this.state.message = result.data;
        this.setState({ message: result.data });
        console.log(this.state.message);
      })
      .catch(err => {
        alert("OOPS");
        console.log(err);
      });
    return <Eventos />;
  };



  render() {
    getChampionship(this.props.user.user.campeonatoId);

      const Child = () => <div >Hello, World! {this.state.addEvent}</div>;
    return (
      <div className=" justify-content-center mt-5 pt-5">
        {!this.state.isHidden && <Child />}
        <button
          className="btn btn-primary"
          onClick={this.getChampionship.bind(this)}
        >
          Ver partidos
        </button>
        {this.state.message && (
          <table className="table table-dark mb-5 mt-5">
            <thead>
              <tr>
                <th scope="col">Equipo 1</th>
                <th scope="col">Equipo 2</th>
                <th scope="col">Eventos</th>
              </tr>
            </thead>
            <tbody>
              {this.state.message.map(message => (
                <tr key={message._id}>
                  <td>{message.team1.id}</td>
                  <td>{message.team2.id}</td>
                  <td>
                    {message.events.length <= 0 ? (
                      <button
                        id={message._id}
                        className="btn btn-success"
                        onClick={this.toggleHidden.bind(this)}
                      >
                        Agregar
                      </button>
                    ) : (
                      message.events.length
                    )}
                  </td>
                </tr>
                // <p key={index}>{message._id}</p>
              ))}
            </tbody>
          </table>
        )}
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
