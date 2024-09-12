import { PriceChange } from "@mui/icons-material"

const Item = ({id, name, price, img, description, sectionId}) => {
  return (
    <article>
        <h2>{name}</h2>
        <img src={img}/>
        <p>${price}</p>
    </article>
  )
}

export default Item