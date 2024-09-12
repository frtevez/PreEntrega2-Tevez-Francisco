import React from 'react'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Workstations" element={<ItemListContainer />} />
          <Route path="/Synthesizers" element={<ItemListContainer />} />
          <Route path="/DigitalPianos" element={<ItemListContainer />} />
          <Route path="/MidiControllers" element={<ItemListContainer />} />
          <Route path="/VirtualInstruments" element={<ItemListContainer />} />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  )
}

export default App