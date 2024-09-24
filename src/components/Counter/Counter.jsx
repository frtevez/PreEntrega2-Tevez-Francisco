import { useEffect, useState } from 'react'
import './Counter.css'

export const Counter = ({ label, number, increaseFunction, decreaseFunction }) => {

    return (
        <section id="counter">
            <p>{label}: {number}</p>
            <div id='counter-arrows'>
                <button onClick={increaseFunction}>▲</button>
                <button onClick={decreaseFunction}>▼</button>
            </div>
        </section>
    )
}
