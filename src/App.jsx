import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

export const App = () => {
  return (
    <>
      <header><NavBar /></header>
      <main>
        <ItemListContainer greeting='Aquí se mostraran los productos'/>
      </main>
      <footer></footer>
    </>
  )
}

export default App