import Item from "../Item/Item"

const ItemList = ({products}) => {
  return (
    <div id="item-list">
        {products.map(item => <Item key={item.id} {...item} />)}
    </div>
  )
}

export default ItemList