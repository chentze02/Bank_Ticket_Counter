import React from "react";

const CallNext = ({statusS, setStatus,index, numCounterServ,setNumCounterServ, queue, setQueue, setNumServ}) =>{
    const nextNum = () => {
        const queueArrayCopy = [...queue]
        const numCounterServCopy = [...numCounterServ]
        const statusSCopy = [...statusS]
        const NumServCopy = queueArrayCopy.shift()
        console.log(NumServCopy)

        if(index === 1){
            numCounterServCopy[0] = NumServCopy;
            statusSCopy[0] = 2;
        }
        else if(index === 2){
            numCounterServCopy[1] = NumServCopy;
            statusSCopy[1] = 2;
        }
        else if(index === 3){
            numCounterServCopy[2] = NumServCopy;
            statusSCopy[2] = 2;
        }
        else if(index === 4){
            numCounterServCopy[3] = NumServCopy;
            statusSCopy[3] = 2;
        }

        setNumServ(NumServCopy)
        setQueue(queueArrayCopy)
        setStatus(statusSCopy)
        setNumCounterServ(numCounterServCopy)
        console.log(numCounterServCopy)
    }
    
    return (
        <button onClick={nextNum}>
            CallNext
        </button>
    )
}

export default CallNext;