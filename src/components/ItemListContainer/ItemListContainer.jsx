import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'
import { useEffect } from 'react'

const ItemListContainer = () => {

  const { productSectionID } = useParams()

  const productSectionTitle = productSectionID.replace(/([A-Z])/g, ' $1').trim()

  useEffect(() => {
    document.title = productSectionTitle + " - Euphonia"
  }, [productSectionID])

  return (
    <section id='item-list-container'>
      <h2>{productSectionTitle}</h2>
      <ItemList products={useProducts("section", productSectionID)} />
    </section>
  )
}

export default ItemListContainer