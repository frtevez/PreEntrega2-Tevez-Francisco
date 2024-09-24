import { useContext, useState } from 'react'
import { USformatter } from '../../utils/priceFormatting'
import './ItemDetail.css'
import { CartContext } from '../../context/cartContext'

const ItemDetail = ({ product }) => {

  const { id, name, price, img, description } = product

  const [amount, setAmount] = useState(1)
  const { addToCart } = useContext(CartContext)

  const increaseAmount = () => {
    setAmount(prev => prev + 1)
  }
  const decreaseAmount = () => {
    if (amount == 1) { return }
    setAmount(prev => prev - 1)
  }

  const handleAddToCart = () => {
    addToCart(product, amount)
  }

  const formattedPrice = USformatter.format(price)

  return (
    <section id="product-details">
      <h2>{name}</h2>
      <section id='main'>
        <img src={img} alt="" />
        <div id='product-submit'>
          <p className='price'>US{formattedPrice}</p>
          <section id="amount">
            <p>Amount: {amount}</p>
            <div id='amount-arrows'>
              <button onClick={increaseAmount}>▲</button>
              <button onClick={decreaseAmount}>▼</button>
            </div>
          </section>
          <button id="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </section>

      <h3>About the {name}...</h3>
      <p className='description'>{description}</p>

    </section>
  )
}

export default ItemDetail