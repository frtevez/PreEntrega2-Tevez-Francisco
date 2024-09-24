import { useEffect } from 'react'

export const Counter = ({ label, number, increaseFunction, decreaseFunction }) => {

    useEffect(() => { setQuantity(number) }, [number])

    return (
        <section id="counter">
            <p>{label}: {quantity}</p>
            <div id='counter-arrows'>
                <button onClick={increaseFunction}>▲</button>
                <button onClick={decreaseFunction}>▼</button>
            </div>
        </section>
    )
}
