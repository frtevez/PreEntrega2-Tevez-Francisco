import { useContext, useEffect } from "react"
import { CartContext } from "../../context/cartContext"
import "./CartItem.css"
import { Counter } from "../Counter/Counter"
import { useCurrency } from "../../hooks/useCurrency"

const CartItem = ({ product }) => {
    const { name, price, amount, img } = product
    const { removeProduct, addOrSubtractProduct } = useContext(CartContext)

    const increaseAmount = () => {
        addOrSubtractProduct(product, 'add')
    }
    const decreaseAmount = () => {
        if (amount == 1) { return }
        addOrSubtractProduct(product, 'subtract')
    }

    return (
        <article className="cart-product">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <Counter label="Amount" number={amount} increaseFunction={increaseAmount} decreaseFunction={decreaseAmount} />
            <p><strong>{useCurrency(price, "USD")}</strong></p>

        </article>
    )
}

export default CartItem