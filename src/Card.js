import React from "react";
import "./index.css";
const Card = (props) =>
{
     return(
        <div  >
        <div className = "card" >
        
         <img className = "image" src = {props.imgsrc} alt  = "deadpool image"/>
        
         <div className = "container">
          
          <span> {props.title}</span>
          <br/>
          <a href= {props.goto}><button className ="button"> watch now</button></a>
          </div>
        </div>
        </div>
     )

}

export default Card;
