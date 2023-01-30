import React from "react";
import "./PageTemplate.css";

const PageTemplate = (props)=>{
    return(
        <div className="PageTemplate">
            {props.children}
        </div>
    );
}

export default PageTemplate;