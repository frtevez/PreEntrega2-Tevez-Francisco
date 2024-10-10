import { useContext, useEffect } from "react"
import { CartContext } from "../../context/cartContext"
import "./CartItem.css"
import { Counter } from "../Counter/Counter"
import { useCurrency } from "../../hooks/useCurrency"
import { NavLink } from "react-router-dom"
import { RemoveCircleOutline } from "@mui/icons-material"

const CartItem = ({ product }) => {
    const { id, section, name, price, amount, img } = product
    const { products, removeProduct, addOrSubtractProduct } = useContext(CartContext)

    const matchIDs = p => p.id == id

    const increaseAmount = () => {
        addOrSubtractProduct(product, 'add')
    }
    const decreaseAmount = () => {
        if (amount == 1) { return }
        addOrSubtractProduct(product, 'subtract')
    }

    const handleRemoveFromCart = (e) => {
        e.preventDefault()
        removeProduct(products.findIndex(matchIDs))
    }

    return (
        <article className="cart-product">
            <img src={img} alt="" />
            <NavLink to={`/${section}/${id}`}>
                <h4>{name}</h4>
            </NavLink>
            <Counter label="Amount" number={amount} increaseFunction={increaseAmount} decreaseFunction={decreaseAmount} />
            <p><strong>{useCurrency(price, "USD")}</strong></p>
            {products.some(matchIDs) && <RemoveCircleOutline className="cart-remove-icon" onClick={handleRemoveFromCart} />}
        </article>
    )
}

export default CartItem