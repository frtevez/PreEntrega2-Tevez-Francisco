import { useContext, useEffect, useState } from "react"
import CartItem from "../CartItem/CartItem"
import { CartContext } from "../../context/CartContext"
import "./Cart.css"
import SummaryItem from "../SummaryItem/SummaryItem"
import { useCurrency } from "../../hooks/useCurrency"
import { NavLink } from "react-router-dom"
import { RemoveShoppingCart } from "@mui/icons-material"
import Swal from "sweetalert2"



const Cart = () => {
    const { products, totalCost, clearCart } = useContext(CartContext)
    const [cartIsEmpty, setCartIsEmpty] = useState(!products.length)

    useEffect(() => {

        setCartIsEmpty(!products.length)
    }, [products])

    const handleClearCart = event => {
        Swal.fire({
            title: "This will remove all the items in your cart!",
            text: "Do you wish to continue?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
          }).then((result) => {
            if (result.isConfirmed) {
                clearCart()
            }
          });
        
    }

    return (
        <section id="cart">
            <ul className="cart-products">
                {
                    cartIsEmpty ?
                        <h2>No Products In Cart!</h2> :
                        <>
                            {products.map(product =>
                                <li key={product.id} className="cart-product">
                                    <CartItem product={product} />
                                </li>)}
                            <li className="clear-cart">
                                <button onClick={handleClearCart}>
                                    <RemoveShoppingCart className="clear-cart-icon" />
                                    <p>Clear Cart</p>
                                </button>
                            </li>
                        </>

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