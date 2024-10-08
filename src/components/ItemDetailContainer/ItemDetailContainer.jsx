import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useProducts } from "../../hooks/useProducts"

const ItemDetailContainer = () => {
    const { itemID } = useParams()
      
    return (
        <section><ItemDetail product={useProducts("id", itemID)}/></section>
    )
}

export default ItemDetailContainer