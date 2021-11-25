import React,{useState,useEffect} from 'react';

const UseState= ()=>{

const [counter,setCounter] =useState(0);

useEffect(()=>{
    console.log("useeffect is called")
})

const increment=()=>{
    setCounter(counter+1)
     
}


const decrement=()=>{
    setCounter(counter-1)
}

const reset=()=>{
    setCounter(counter-counter)
}

    return (

        <div>
            <h1>UseState and UseEffet</h1>
            <p>Counter {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>

    );

}

export default UseState