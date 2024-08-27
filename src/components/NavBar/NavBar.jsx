import React from 'react'
import Brand from '../Brand/Brand'
import CardWidget from '../CartWidget/CardWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <Brand/>
        <menu>
            <li>Workstations</li>
            <li>Synthesizers</li>
            <li>Digital Pianos</li>
            <li>MIDI Controllers</li>
            <li>Virtual Instruments</li>
        </menu>
        <CardWidget/>
    </nav>
  )
}

export default NavBar