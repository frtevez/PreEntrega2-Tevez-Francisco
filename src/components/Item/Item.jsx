import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import './Item.css'
import { useCurrency } from '../../hooks/useCurrency'
import { CartContext } from '../../context/CartContext'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { RemoveCircleOutline } from '@mui/icons-material'

const Item = ({ product }) => {

  const { id, name, price, img, description, section } = product
  const { addToCart, products, removeProduct } = useContext(CartContext)

  const matchIDs = p => p.id == id

  const handleRemoveFromCart = (e) => {
    e.preventDefault()
    removeProduct(products.findIndex(matchIDs))
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product, 1)
  }

  return (
    <NavLink to={`/${section}/${id}`} className="item-link">
      <article className="item">
        <h2>{name}</h2>
        <img src={img} />
        <p className="price">{useCurrency(price, "USD")}</p>
        <p className="description">{description}</p>
        {
          products.some(matchIDs) ?
            <RemoveCircleOutline className="article-cart-icon article-remove-icon" onClick={handleRemoveFromCart}/> :
            <AddShoppingCartIcon className="article-cart-icon" onClick={handleAddToCart} />
        }
      </article>
    </NavLink>
  )
}

export default Item