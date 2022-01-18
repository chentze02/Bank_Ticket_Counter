import React  from "react";

const Completecurr = ({statusS, setStatus,index}) => {
    const complete = () => {
        const statusSCopy = [...statusS]

        if(index === 1){
            statusSCopy[0] = 1;
        }
        else if(index === 2){
            statusSCopy[1] = 1;
        }
        else if(index === 3){
            statusSCopy[2] = 1;
        }
        else if(index === 4){
            statusSCopy[3] = 1;
        }

        setStatus(statusSCopy)
    }
    return(
        <button onClick={complete}>
            Comp curr
        </button>
    )
}

export default Completecurr;