import React from 'react'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productSectionID" element={<ItemListContainer />} />
          <Route path="/:productSectionID/:itemID" element={<ItemDetailContainer />} />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  )
}

export default App