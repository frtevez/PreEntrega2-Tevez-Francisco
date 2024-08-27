import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <section id='item-list-container'>
    <h2>{greeting}</h2>
    </section>
  )
}

export default ItemListContainer