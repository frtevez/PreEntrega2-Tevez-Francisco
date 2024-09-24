import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsByPropertyValue } from "../../../asyncmock"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    const { itemID } = useParams()

    useEffect(() => {{
        getProductsByPropertyValue('id', itemID).then(response => setProduct(response))
      }}, [itemID])
      
      
    return (
        <section><ItemDetail product={product}/></section>
    )
}

export default ItemDetailContainer