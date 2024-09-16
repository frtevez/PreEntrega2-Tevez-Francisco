import { NavLink } from 'react-router-dom'
import './Item.css'
import { USformatter } from '../../utils/priceFormatting'

const Item = ({ id, name, price, img, description, section }) => {

  const formattedPrice = USformatter.format(price)

  return (
    <NavLink to={`/${section}/${id}`} className="item-link">
      <article className="item">
        <h2>{name}</h2>
        <img src={img} />
        <p className="price">US{formattedPrice}</p>
        <p className="description">{description}</p>
      </article>
    </NavLink>
  )
}

export default Item