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
    this.getChampionship = this.getChampionship.bind(this);

  }



  getChampionship = () => {
    const asd = this.props.user.user.campeonatoId;
    console.log(asd);
    getChampionship(asd)
      .then(result => {
        this.props.user.user.partidos = result.data;
        //this.state.message = result.data;
        this.setState({message: result.data});
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
    return (
      <div className=" justify-content-center mt-5 pt-5">
        <button
          className="btn btn-primary"
          onClick={this.getChampionship.bind(this)}
        >
          Ver partidos
        </button>
        {this.state.message && (
         <div>
          {this.state.message.map((message, index) => (
            <p key={index}>{message._id}</p>
          ))}
        </div>
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
