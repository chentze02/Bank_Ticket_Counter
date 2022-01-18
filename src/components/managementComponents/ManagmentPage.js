import React from 'react';
import CounterM from './CounterM';
const style = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flexDirection: 'row'

}
const ManagementPage = ({numCounterServ, setNumCounterServ, queue, setQueue, setNumServ, statusS, setStatus}) => {
    return(
      <div>
        <b>Manager View</b> <br/>
          <div style={style}>
            <CounterM index ={1} numCounterServ = {numCounterServ} setNumCounterServ = {setNumCounterServ} statusS={statusS} setStatus = {setStatus} setNumServ = {setNumServ} queue = {queue} setQueue={setQueue}/>
            <CounterM index ={2} numCounterServ = {numCounterServ} setNumCounterServ = {setNumCounterServ} statusS={statusS} setStatus = {setStatus} setNumServ = {setNumServ} queue = {queue} setQueue={setQueue}/>
            <CounterM index ={3} numCounterServ = {numCounterServ} setNumCounterServ = {setNumCounterServ} statusS={statusS} setStatus = {setStatus} setNumServ = {setNumServ} queue = {queue} setQueue={setQueue}/>
            <CounterM index ={4} numCounterServ = {numCounterServ} setNumCounterServ = {setNumCounterServ} statusS={statusS} setStatus = {setStatus} setNumServ = {setNumServ} queue = {queue} setQueue={setQueue}/>
          </div>
      </div>
    )
}

export default ManagementPage;

