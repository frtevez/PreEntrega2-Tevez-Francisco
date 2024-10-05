import { useContext, useEffect } from "react"
import CartItem from "../CartItem/CartItem"
import { CartContext } from "../../context/cartContext"
import "./Cart.css"
import SummaryItem from "../SummaryItem/SummaryItem"
import { useCurrency } from "../../hooks/useCurrency"

const Cart = () => {
    const { products, totalCost, clearCart } = useContext(CartContext)
    

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
                    <button id="checkout-btn"> CHECKOUT </button>
                </div>
            </div>
        </section>
    )
}

export default Cart