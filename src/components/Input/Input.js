import "./Input.css";

function Input(props) {
    let classe = props.className === undefined ? "Input" : props.className;
    return (
      <input 
        type={props.type} 
        className={classe}
        value={props.value}
        onChange={(e)=>props.onChange(e.target.value)}
        disabled={props.disabled}
        
      ></input>
    );
  }
  
  export default Input;
  