import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


const curDate = new Date(2020,3,4,17);
const curTime = curDate.getHours();
let greet = '';

const greetCss = {

};


if(curTime>1 && curTime<12)
{
  greet = 'Good Morning';
  greetCss.color = "Green";
}
else if(curTime>=12 && curTime<19)
{
  greet = 'Good Afternoon';
  greetCss.color = "Orange";
}
else
{
  greet = 'Good Evening';
  greetCss.color = "Black";
}

ReactDom.render(
  [
    <div>
    <h1>Hello sir, <span style={greetCss}>{greet} !!!</span> </h1>
    </div>
  ],
  document.getElementById('root')
);