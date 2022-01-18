import React from 'react';
import CallNext from './CallNext';
import Completecurr from './Completecurr';
import Offline from './Offline';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800'

}

const CounterM = ({numCounterServ,setNumCounterServ, queue, setQueue , setNumServ,index,setStatus, statusS}) => {
    return(
        <div style={style}>
            Counter {index} <br/>
            <Offline statusS={statusS} setStatus={setStatus} index ={index}/> <br/>
            <Completecurr statusS={statusS} setStatus={setStatus} index ={index} /> <br/>
            <CallNext statusS={statusS} setStatus={setStatus} index = {index} numCounterServ = {numCounterServ} setNumCounterServ = {setNumCounterServ} queue = {queue} setQueue={setQueue} setNumServ = {setNumServ} />
        </div>
    )
}

export default CounterM;