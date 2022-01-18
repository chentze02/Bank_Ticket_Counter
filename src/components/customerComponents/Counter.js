import React from 'react';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'

}

const redDot = {
    height: '25px',
    width: '25px',
    backgroundColor: 'red',
    borderRadius: '50%',
    display: 'inline-block'
}

const greenDot = {
    height: '25px',
    width: '25px',
    backgroundColor: 'green',
    borderRadius: '50%',
    display: 'inline-block'
}

const greyDot = {
    height: '25px',
    width: '25px',
    backgroundColor: 'grey',
    borderRadius: '50%',
    display: 'inline-block'
}

const Counter = ({numCounterServ, value, statusS}) => {
   
    if(statusS[value-1] === 0){
        return(
            <div style = {style}>
                Counter {value} <br/>
                {numCounterServ[value-1]}
                <div style={greyDot}></div>
            </div>
            )
    }
    else if(statusS[value-1] === 1){
        return(
            <div style = {style}>
                Counter {value} <br/>
                {numCounterServ[value-1]}
                <div style={greenDot}></div>
            </div>
            )
    }
    else if(statusS[value-1] === 2){
        return(
            <div style = {style}>
                Counter {value} <br/>
                {numCounterServ[value-1]}
                <div style={redDot}></div>
            </div>
            )
    }

}

export default Counter;