import React, { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
/* https://beta.reactjs.org/reference/react/useState
this helped explain to me useState and relatively how to use it to create the counter in a way I could understand.
state is component specific memory
in const [count, setCount], count is a state variable while setCount is the setter function */




function RepetitionEx() {
    const [count, setCount] = useState(0);
    function increaseCount() {
        setCount(count + 1)
    }
    function resetCounter() {
        setCount(0)
    }
    function getTitle() {
        let path = window.location.pathname
        if (path == "/PushUps") {
            return "Push Ups"
        } 
        else if (path == "/JumpingJacks") {
            return "Jumping Jacks"
        }
        else if (path == "/SitUps") {
            return "Sit Ups"
        }
        else {
            return "No Title"
        }
    }
    return (
        <div className="container">
            <div className="mainArea">
                <h1>{getTitle()}</h1>
                <div className="repButton">
                    <h2>{count}</h2>
                    <button className="completeRep" onClick={increaseCount}>Completed Rep</button>
                    <button className="resetButton" onClick={resetCounter}>Reset</button>
                    <Link to="/Home"><button className="returnButton">Return</button></Link>
                </div>
            </div>
        </div>
    )
}

export default RepetitionEx