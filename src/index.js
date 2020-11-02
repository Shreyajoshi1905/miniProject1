import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css";
let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {}

if( curDate >= 1 && curDate < 12)
{
    greeting = "Good Morning"
    cssStyle.color = "green"
}
else if(curDate>=12 && curDate <= 19)
{
    greeting = "Good Evening"
    cssStyle.color = "orange"
}

else if(curDate > 19 && curDate<=23 )
{
    greeting = "good night"
    cssStyle.color = "black"
}


ReactDOM.render(
    <h1>hello sir/maam ,<span style = {cssStyle}>{greeting}</span> </h1>,
    document.getElementById("root")
);