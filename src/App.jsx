import React from 'react'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext'
import CartContainer from './components/CartContainer/CartContainer'
import Checkout from './components/Checkout/Checkout'
import CheckoutSuccess from './components/Checkout/CheckoutSuccess'

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
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
          </Routes>
        </main>
        <footer></footer>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App