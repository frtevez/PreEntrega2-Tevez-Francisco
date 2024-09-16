const ItemDetail = ({ id, name, price, img, description }) => {
  return (
    <section id="product-details">
      <h2>{name}</h2>
      <img src={img} alt="" />
      <p>{price}</p>
      <p>{description}</p>
    </section>
  )
}

export default ItemDetail