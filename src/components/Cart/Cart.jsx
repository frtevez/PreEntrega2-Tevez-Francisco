import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import { CartContext } from "../../context/cartContext"

const Cart = () => {
    const { products, totalCost, clearCart } = useContext(CartContext)

    return (
        <section id="cart">
            {products.map(product => <CartItem key={product.id} product={product} />)}
        </section>
    )
}

export default Cart