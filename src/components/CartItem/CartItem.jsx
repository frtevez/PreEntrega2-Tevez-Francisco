import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { USformatter } from "../../utils/priceFormatting"
import "./CartItem.css"
import { Counter } from "../Counter/Counter"

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
            <p><strong>US{USformatter.format(price)}</strong></p>
            <Counter label="Amount" number={amount} increaseFunction={increaseAmount} decreaseFunction={decreaseAmount} />

        </article>
    )
}

export default CartItem