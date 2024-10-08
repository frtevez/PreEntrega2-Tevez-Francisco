import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'

const ItemListContainer = () => {
  // const [products, setProducts] = useState([])

  const { productSectionID } = useParams()

  const productSectionTitle = productSectionID.replace(/([A-Z])/g, ' $1').trim()

  // useEffect(() => {
  //   // getProductsByPropertyValue('section', productSectionID).then(response => setProducts(response))
  //   setProducts(useProducts("section", productSectionID))
  // }, [productSectionID])

  return (
    <section id='item-list-container'>
      <h2>{productSectionTitle}</h2>
      <ItemList products={useProducts("section", productSectionID)} />
    </section>
  )
}

export default ItemListContainer