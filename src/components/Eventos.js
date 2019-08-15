import React from "react";
//import css
import "../App.css";

import { connect } from "react-redux";
import { getChampionship, getTeam, finishMatch } from "../services";

class Eventos extends React.Component {
  componentDidMount() {
    this.getChampionship();
  }
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      teamVsTeam: "",
      team1: "",
      team2: "",
      events: [],
      playersT1: [],
      playersT2: [],
      totalGoals: [],
      playerId: "",
      minute: 0,
      type: "GOAL"
    };
    this.getChampionship = this.getChampionship.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getTeamNames = () =>{
    return true;

  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getTeam1 = id => {
    getTeam(id).then(result => {
      console.log(result.data.name);
      this.setState({ playersT1: result.data.players });
      return result.data;
    });
  };
  getTeam2 = id => {
    getTeam(id).then(result => {
      console.log(result.data.name);
      this.setState({ playersT2: result.data.players });
      return result.data;
    });
  };

  getChampionship = () => {
    const asd = this.props.user.user.campeonatoId;

    getChampionship(asd)
      .then(result => {
        this.props.user.user.partidos = result.data;
        this.setState({ message: result.data });
      })
      .catch(err => {
        alert("OOPS");
        console.log(err);
      });
    return <Eventos />;
  };

  changeTeamVsTeam = ({ target: { value } }) => {
    const matches = this.state.message;
    let matchesFiltered = matches.filter(m => {
      return m._id === value;
    })[0];
    this.setState({
      teamVsTeam: value,
      team1: matchesFiltered.team1.id,
      team2: matchesFiltered.team2.id
    });
    console.log(this.state.team1, this.state.team2, this.state.teamVsTeam);
    this.getTeam1(this.state.team1);
    this.getTeam2(this.state.team2);
    console.log(this.state.playersT1);
    console.log(this.state.playersT2);
  };

  addEvent1 = event => {
       event.preventDefault();
       const events = this.state.events;
       const user = this.state;
       const ev = {
             playerId: user.playerId,
             minute: user.minute,
             type: user.type
       };
       events.push(ev);
       this.setState({ events: events });
       console.log(this.state.events);
  };

  allEvents = event => {
    event.preventDefault();
    const user = this.state;
    const all = {team1: {
        id: user.team1,
        players: []
      },
      team2: {
        id: user.team2,
        players: []
      },
      events :[ ...user.events]
      }
      console.log(all);
      finishMatch(this.state.teamVsTeam, all)
        .then(result => {
          alert("se agrego el partido");
          console.log(result.data);

        })
        .catch(err => {
          alert("errrrrror ");
          console.log(err);
        });
    }
  addEvent2 = event => {
    event.preventDefault();
    const events = this.state.events;
    const user = this.state;
    const ev = {
          playerId: user.playerId,
          minute: user.minute,
          type: user.type
    };
    events.push(ev);
    this.setState({events: events})
    console.log(this.state.events);
  };



  render() {
    getChampionship(this.props.user.user.campeonatoId);

    return (
      <div className=" justify-content-center row mt-5 w-50">
        <label>Cruces entre cuadros</label>
        <select className="form-control" onChange={this.changeTeamVsTeam}>
          <option>------</option>
          {this.state.message &&
            this.state.message.map((m, i) => (
              <option key={i} value={m._id}>
                {m.team1.id}
                {" VS "}
                {m.team2.id}
              </option>
            ))}
        </select>
        <form className="card card-body m-1" onSubmit={this.addEvent1}>
          <label>Jugadores cuadro 1</label>
          <select
            className="form-control"
            onChange={this.handleChange.bind(this)}
            name="playerId"
          >
            <option value="">------</option>
            {this.state.playersT1 &&
              this.state.playersT1.map((p, index) => (
                <option key={index} value={p._id}>
                  {p.name} {p.lastName} {`(${p.number})`}
                </option>
              ))}
          </select>
          <label>Minuto</label>
          <input
            type="number"
            min="1"
            max="90"
            name="minute"
            onChange={this.handleChange.bind(this)}
          />
          <label>Evento</label>
          <select name="type" onChange={this.handleChange.bind(this)}>
            <option value="GOAL">Gol</option>
            <option value="OWN_GOAL">Gol en contra</option>
            <option value="YELLOW_CARD">Tarjeta amarilla</option>
            <option value="RED_CARD">Tarjeta roja</option>
          </select>
          <br />
          <button type="submit" className="btn btn-success">
            Agregar Evento
          </button>
        </form>
        <form className="card card-body p-3 mt-1" onSubmit={this.addEvent2}>
          <label>Jugadores cuadro 2</label>
          <select
            className="form-control"
            onChange={this.handleChange.bind(this)}
            name="playerId"
          >
            <option value="">------</option>
            {this.state.playersT2 &&
              this.state.playersT2.map((p, index) => (
                <option key={index} value={p._id}>
                  {p.name} {p.lastName} {`(${p.number})`}
                </option>
              ))}
          </select>
          <label>Minuto</label>
          <input
            type="number"
            min="1"
            max="90"
            name="minute"
            onChange={this.handleChange.bind(this)}
          />
          <label>Evento</label>
          <select name="type" onChange={this.handleChange.bind(this)}>
            <option value="GOAL">Gol</option>
            <option value="OWN_GOAL">Gol en contra</option>
            <option value="YELLOW_CARD">Tarjeta amarilla</option>
            <option value="RED_CARD">Tarjeta roja</option>
          </select>
          <br />
          <button type="submit" className="btn btn-success">
            Agregar evento
          </button>
        </form>
        <button className="btn btn-primary" onClick={this.allEvents}>
            Finalizar partido
        </button>
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
