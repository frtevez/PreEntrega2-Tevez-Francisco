import React from 'react'
import Brand from '../Brand/Brand'
import CardWidget from '../CartWidget/CardWidget'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/'><Brand /></Link>
        <menu>
          <li>
            <NavLink to='/Workstations'>Workstations</NavLink>
          </li>
          <li>
            <NavLink to='/Synthesizers'>Synthesizers</NavLink>
          </li>
          <li>
            <NavLink to='/DigitalPianos'>Digital Pianos</NavLink>
          </li>
          <li>
            <NavLink to='/MidiControllers'>MIDI Controllers</NavLink>
          </li>
          <li>
            <NavLink to='/VirtualInstruments'>Virtual Instruments</NavLink>
          </li>
        </menu>
      </nav>
      <CardWidget />
    </header>
  )
}

export default Header