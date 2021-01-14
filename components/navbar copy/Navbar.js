import React from 'react'

import Headroom from 'react-headroom'
import {
  Nav,
  NavLink,
  Bars,
  NavContainer,
  NavMenu,
  NavBtnLink,
  NavBtn,
} from './navbar-elements'

function Navbar() {
  return (
    <Headroom>
      <Nav>
        <NavContainer>
          <NavLink href="/">
            <h1>Hosply</h1>
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink href="/why">Why Hosply</NavLink>
            <NavLink href="/solutions">Solutions</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/contact">Contact us</NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href="/app">Get started for free</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </Headroom>
  )
}

export default Navbar
