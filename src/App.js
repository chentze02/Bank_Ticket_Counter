import CustomerPage from './components/customerComponents/CustomerPage';
import './App.css';
import { useState } from 'react';
import ManagementPage from './components/managementComponents/ManagmentPage';

const App = () => {
  const [page, setPage] = useState(true) //state for changing between customer and management view
  const [statusS, setStatus] = useState([0,0,0,0]) //state for wether the counter is online or offline or busy
  const [numCounterServ, setNumCounterServ] = useState([0,0,0,0]) //state for the individual number the counter is serving
  const [num, setNum] = useState(0) //State for number taken by customer
  const [queue, setQueue] = useState([]) //queue for the number take by customer
  const [NumServ, setNumServ] = useState(0) //state for the last served number 

  return(
    <div>
      {page === true 
      ?<CustomerPage numCounterServ={numCounterServ} statusS = {statusS} NumServ={NumServ} queue={queue} setQueue={setQueue} num={num} setNum={setNum} />
      :<ManagementPage numCounterServ = {numCounterServ} setNumCounterServ = {setNumCounterServ} setNumServ = {setNumServ} queue={queue} setQueue={setQueue} statusS={statusS} setStatus = {setStatus}/>}
      <button onClick = {() => setPage(!page)}>Change View</button>
    </div>

  )
}

export default App;
