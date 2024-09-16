import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <div id="item-list">
        {products.map(item => <Item key={item.id} {...item} />)}
    </div>
  )
}

export default ItemList