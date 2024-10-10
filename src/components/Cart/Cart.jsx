import { useContext, useEffect, useState } from "react"
import CartItem from "../CartItem/CartItem"
import { CartContext } from "../../context/cartContext"
import "./Cart.css"
import SummaryItem from "../SummaryItem/SummaryItem"
import { useCurrency } from "../../hooks/useCurrency"
import { NavLink } from "react-router-dom"

const Cart = () => {
    const { products, totalCost, clearCart } = useContext(CartContext)
    const [cartIsEmpty, setCartIsEmpty] = useState(products.length == 0)

    useEffect(() => {

        setCartIsEmpty(products.length == 0)
    }, [products])


    return (
        <section id="cart">
            <ul className="cart-products">
                {
                    products[0] == undefined ? <h2>No Products In Cart!</h2>
                        : products.map(product =>
                            <li key={product.id} className="cart-product">
                                <CartItem product={product} />
                            </li>)
                }
            </ul>
            <div id="summary">
                <h2>Summary</h2>
                <div id="summary-products">
                    {
                        products.map(product =>
                            <li key={product.id} className="summary-product">
                                <SummaryItem product={product} />
                            </li>)
                    }
                </div>
                <p id="summary-total">Total: {useCurrency(totalCost, "USD")}</p>
                <div>
                    <NavLink to="/checkout" onClick={e => cartIsEmpty && e.preventDefault()}>
                        <button id="checkout-btn" className={cartIsEmpty ? "greyed-out" : ""}> CHECKOUT </button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Cart