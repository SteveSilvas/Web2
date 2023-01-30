import React from "react";
import Imc from "../Imc/Imc";
import PeopleProfile from "../PeopleProfile/PeopleProfile";
import Clock from "../Clock/Clock";
import "./Menu.css";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import VoteCounter from "../VoteCounter/VoteCounter";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        showClock: false,
        showImc: false,
    };
  }

//   componentDidMount() {
//     // this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     // clearIntervkal(this.timerID);
//   }



  render() {
    return (
      <div className="MenuContainer">
        <div className="MenuTab">
          <button className="ButtonMenu" onClick={(e) => this.onClickClock(e)}>Clock</button>
          <button className="ButtonMenu" onClick={(e) => this.onClickImc(e)}>IMC</button>
          <button className="ButtonMenu" onClick={(e) => this.onClickPeopleProfile(e)}>Perfil Pessoal</button>
          <button className="ButtonMenu" onClick={(e) => this.onClickVoteCounter(e)}>Contador de votos</button>
        </div>
        <div className="PanelCenter">
            <PageTemplate>
                {this.renderComponents()}
            </PageTemplate>
        </div>
      </div>
    );
  }

  clearSelectedTabs(){
    this.setState({
      showClock: false,
      showImc: false,
      showPeopleProfile: false,
      showVoteCounter: false
    })
  }

  onClickClock(e){
    this.clearSelectedTabs();
    e.stopPropagation();
    this.setState({
        showClock: true,
    });
  }

  
  onClickImc(e){
    this.clearSelectedTabs();
    e.stopPropagation();
    this.setState({showImc: true});
  }

  onClickPeopleProfile(e){
    this.clearSelectedTabs();
    e.stopPropagation();
    this.setState({showPeopleProfile: true});
  }

  onClickVoteCounter(e){
    this.clearSelectedTabs();
    e.stopPropagation();
    this.setState({showVoteCounter: true});
  }

  renderComponents(){
    return(
      <>
        {this.renderClock()}
        {this.renderImc()}
        {this.renderPeopleProfile()}
        {this.renderCounter()}
      </>
    );
  }

  renderClock(){
    return (this.state.showClock ? <Clock/> : "");
  }

  renderImc(){
    return (this.state.showImc ? <Imc/> : "");
  }

  renderPeopleProfile(){
    return (this.state.showPeopleProfile ? <PeopleProfile/> : "");
  }

  renderCounter(){
    return (this.state.showVoteCounter ? <VoteCounter/> : "");
  }

}
export default Menu;
