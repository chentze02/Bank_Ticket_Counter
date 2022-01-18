import React from 'react';

const Offline = ({index, setStatus, statusS}) => {

   const toggleOnOff = () => {
      const statusArrayCopy = [...statusS];
      if(index === 1){
         statusArrayCopy[0] === 0 ? statusArrayCopy[0] = 1 : statusArrayCopy[0] = 0;
      }
      else if(index === 2){
         statusArrayCopy[1] === 0 ? statusArrayCopy[1] = 1 : statusArrayCopy[1] = 0;
      }
      else if(index === 3){
         statusArrayCopy[2] === 0 ? statusArrayCopy[2] = 1 : statusArrayCopy[2] = 0;
      }
      else if(index === 4){
         statusArrayCopy[3] === 0 ? statusArrayCopy[3] = 1 : statusArrayCopy[3] = 0;
      }
      
      setStatus(statusArrayCopy);
      // console.log("the set status " + statusS)
      console.log("the status array is" )
      console.log(statusArrayCopy)
   }

   return(

   <button onClick={toggleOnOff}>
      {statusS[index-1] === 0 ? "Go Online" : "Go Offline" }
   </button>
   )
}

export default Offline;