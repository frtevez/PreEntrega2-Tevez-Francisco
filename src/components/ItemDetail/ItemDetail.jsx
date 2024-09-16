import { USformatter } from '../../utils/priceFormatting'
import './ItemDetail.css'

const ItemDetail = ({ id, name, price, img, description }) => {

  const formattedPrice = USformatter.format(price)

  return (
    <section id="product-details">
      <h2>{name}</h2>
      <img src={img} alt="" />
      <p className='price'>US{formattedPrice}</p>
      <h3>About the {name}...</h3>
      <p className='description'>{description}</p>
    </section>
  )
}

export default ItemDetail