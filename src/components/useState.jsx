import React, {useState} from "react"

export default function UseState(){

    const [count, setCount] = useState(4)

    function decrementCount (){
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount (){
        setCount(prevCount => prevCount + 1)
    }

    const [state, setState] = useState("Hello there!")

    function changeMessage(){
        setState(prevSet => prevSet = "Welcome")
    }

    return (
        <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>

        <div className="testing-state">
            <h1>{state}</h1>
            <button onClick={changeMessage}>change message</button>
        </div>
        </>
    )
}