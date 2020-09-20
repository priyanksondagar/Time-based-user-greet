import React from 'react';
//import App from './App';

    
    const curDate = new Date();
    const curTime = curDate.getHours();
    let greet = '';

    const greetCss = {};
    
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
    


//export default Logic;
export {greet,greetCss}; 