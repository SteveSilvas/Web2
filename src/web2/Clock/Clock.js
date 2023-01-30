import React from "react";
import "./Clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="Clock">
        <h1>Olá!</h1>
        <span> Hoje é dia: {this.state.date.toLocaleDateString()}</span>
        <p> Horário: {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
