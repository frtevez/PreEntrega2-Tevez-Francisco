import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { USformatter } from "../../utils/priceFormatting"
import "./CartItem.css"

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
            <section id="amount">
                <p>Amount: {amount}</p>
                <div id='amount-arrows'>
                    <button onClick={increaseAmount}>▲</button>
                    <button onClick={decreaseAmount}>▼</button>
                </div>
            </section>

        </article>
    )
}

export default CartItem