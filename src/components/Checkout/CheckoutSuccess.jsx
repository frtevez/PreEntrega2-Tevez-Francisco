import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CheckoutSuccess = () => {
    const { clearCart } = useContext(CartContext)
    const orderId = useLocation().state.id

    useEffect(()=>{
        document.title = "Success! - Euphonia"
        clearCart()
    }, [])

    return (
        <section id='checkout-success'>
            <h1>Thanks for your purchase!</h1>
            <h2>Your order ID is {orderId} </h2>
        </section>
    )
}

export default CheckoutSuccess