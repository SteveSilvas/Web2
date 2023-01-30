function Input(props) {
    let classe = props.className === undefined ? "Input" : props.className;
    return (
      <input 
        type={props.type} 
        className={classe}
        value={props.value}
        onChange={(e)=>props.onChange(e.target.value)}
        
      ></input>
    );
  }
  
  export default Input;
  