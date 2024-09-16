import { NavLink } from 'react-router-dom'
import './Item.css'

const Item = ({ id, name, price, img, description, sectionId }) => {

  const USformatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  const formattedPrice = USformatter.format(price)

  return (
    <NavLink to={`/${sectionId}/${id}`} className="item-link">
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