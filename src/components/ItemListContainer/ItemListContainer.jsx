import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useHref, useLocation, useMatches, useOutlet, useParams, useResolvedPath, useRoutes } from 'react-router-dom'
import { getProducts } from '../../../asyncmock'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  const { pathname: currentPath } = useLocation()
  const productSectionID = currentPath.slice(1)
  console.log(productSectionID);
  
  
  useEffect(() => {{
    getProducts(productSectionID).then(response => setProducts(response))
  }}, [productSectionID])

  return (
    <section id='item-list-container'>
      <ItemList products={products}/>
    </section>
  )
}

export default ItemListContainer