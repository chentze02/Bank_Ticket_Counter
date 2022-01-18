import React from 'react';

const style = {
    border: '4px solid darkblue',
    borderRadius:'10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'flex'

}

const textStyle = {
    color: 'green',
    fontSize: '25px',
    textAlig: 'Center'

}

const Number = ({onClick}) => (
    <button style={style} onClick={onClick}>
        <div style = {textStyle}>Take a Number</div>
    </button>
)

export default Number;