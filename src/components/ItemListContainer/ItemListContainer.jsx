import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../../asyncmock'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  const { productSectionID } = useParams()

  const productSectionTitle = productSectionID.replace(/([A-Z])/g, ' $1').trim()
  
  useEffect(() => {{
    getProducts(productSectionID).then(response => setProducts(response))
  }}, [productSectionID])

  return (
    <section id='item-list-container'>
      <h2>{productSectionTitle}</h2>
      <ItemList products={products}/>
    </section>
  )
}

export default ItemListContainer