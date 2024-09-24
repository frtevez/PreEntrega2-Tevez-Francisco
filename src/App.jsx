import React from 'react'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/cartContext'
import CartContainer from './components/CartContainer/CartContainer'

export const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:productSectionID" element={<ItemListContainer />} />
            <Route path="/:productSectionID/:itemID" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </main>
        <footer></footer>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App