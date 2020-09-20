import React from 'react';
import {greet,greetCss} from './Logic';

function Heading(){
    return(
        [
            <h1> Hello Sir, <span style={greetCss}> {greet} !!!</span> </h1>
        ]
    );
};

export default Heading;