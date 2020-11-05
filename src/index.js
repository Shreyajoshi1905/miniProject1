import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css";

import Card from "./Card";
import Header from "./Header";
import Sdata from "./Sdata"


ReactDOM.render(
    <div className = "row">
    <Header/>
     <Card className = "col-lg-3" 
      imgsrc = {Sdata[0].imgsrc}
      title = {Sdata[0].title}
      goto = {Sdata[0].goto}
      
      />
     <Card className = "col-lg-3" 
     imgsrc = {Sdata[1].imgsrc}
     title = {Sdata[1].title}
     goto = {Sdata[1].goto}
     />
     <Card className = "col-lg-3" 
     imgsrc = {Sdata[2].imgsrc}
     title = {Sdata[2].title}
     goto = {Sdata[2].goto}
     
     />
     <Card  className = "col-lg-3" 
     imgsrc = {Sdata[3].imgsrc}
     title = {Sdata[3].title}
     goto = {Sdata[3].goto}
     
     />
     
    </div>,
    document.getElementById("root")
)
    
