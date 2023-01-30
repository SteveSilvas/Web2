import React from "react";
import "./ImgInputView.css"

class ImgInputView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            src: this.props.src,
            editing: this.props.editing
        };
      }

      componentDidUpdate() {
        if(this.props.editing !== this.state.editing){
            this.setState({editing: this.props.editing});
        }
      }
    
    render(){
        return (
            this.state.editing ? this.renderInputImg() : this.renderViewImg()
        );

    }

    renderInputImg(){
        return(
            <div className="Left Column">
              <div>
                  <label>Link da imagem</label>
              </div>
                <input type="text" onChange={(e) => this.setState({src: e.target.value})} onKeyDown={ (e) => this.handleKeyDown(e)}/>
            </div>
        );
    }

    handleKeyDown(e) {
        if(e.keyCode === 13) { 
            this.setState({editing: false});
        }
    }

    renderViewImg(){
        return(
            <figure className="ImageBox">
                <img className="ImgContent" src={this.state.src} alt="profile"/>
            </figure>
        );
    }
}

export default ImgInputView;