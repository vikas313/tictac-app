import React from 'react';
import '../App.css';


function Square(props) {

    // console.log('square called');
    return (
        <button className='Square'
            onClick={props.onClick} >
            {props.value}
        </button>




    );

}
export default Square;