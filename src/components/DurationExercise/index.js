import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* https://beta.reactjs.org/reference/react/useState
this tutorial was also used to help in the timer exercise

https://reactjs.org/docs/hooks-effect.html
explains useEffect and */

/*https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9

both used to reference how to build a timer, explains setInterval and setting the const for the different times */

const Timer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [start, setStart] = useState(false);
    const [time, setTime] = useState(0);
    let timeMeasure;
    let timeMilliseconds;

    useEffect(() => {

        if (start) {
            timeMeasure = setInterval(() => {
                setMilliseconds(milliseconds + 1);
                if (milliseconds === 1000) {
                    setSeconds(seconds + 1);
                    setMilliseconds(0);
                }
                if (seconds === 59) {
                    setMinutes(minutes + 1);
                    setSeconds(0);
                    setMilliseconds(0);
                }
                if (minutes === 59 && seconds === 59) {
                    setHours(hours + 1);
                    setMilliseconds(0);
                    setMinutes(0);
                    setSeconds(0);
                }

                setTime((lastTime) => lastTime + 10)
            })
        } else if (!start) {
            clearInterval(timeMeasure)

        }


        return () => {
            clearInterval(timeMeasure);
        };


    });


    const restart = () => {
        clearInterval(timeMeasure);
        setMilliseconds(0);
        setMinutes(0);
        setSeconds(0);
        setHours(0);
    }


    function getTitle() {
        let path = window.location.pathname
        if (path == "/Running") {
            return "Running"
        }
        else if (path == "/Bicycling") {
            return "Bicycling"
        }
        else {
            return "No Title"
        }
    }

    return (
        <div className="container">
            <div className="mainArea">
                <h1>{getTitle()}</h1>
                <div className="durationButton">
                    <h2>{hours}:{minutes}:{seconds}.{milliseconds}</h2>
                    <button className="completeRep" onClick={() => setStart(true)}>Start</button>
                    <button className="resetButton" onClick={() => {
                        setStart(false)
                        setTime(0)
                        setMilliseconds(0);
                        setMinutes(0);
                        setSeconds(0);
                        setHours(0);
                    }}>Reset</button>
                    <Link to="/Home"><button className="returnButton">Return</button></Link>
                </div>
            </div>
        </div >
    )

}


/* first attempt */
/*function durationEx() {*/

    /*
    function increaseSeconds() {
        setSeconds(seconds + 1)
    }
    function resetTimer() {
        setSeconds(0)
    }
    */

export default Timer