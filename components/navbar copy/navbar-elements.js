import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
// import { useRouter } from 'next/router'

import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
  background-color: #000;

  z-index: 1;
`
export const StyledLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  white-space: nowrap;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }

  &:hover {
    color: #ccc;
  }
`

export const NavContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 855px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 855px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 855px) {
    display: none;
  }
`

export const StyledNavBtnLink = styled.a`
  border-radius: 4px;
  background-color: #255ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #ffff;
    color: #010606;
  }
`

export const NavBtnLink = ({ href, children }) => (
  <Link prefetch href={href} passHref>
    <StyledNavBtnLink>{children}</StyledNavBtnLink>
  </Link>
)

export const NavLink = ({ href, children }) => {
  // If needs to track active
  //   const router = useRouter()

  let className = children?.props?.className || ''
  // If needs to track active
  //   if (router.pathname === href) {
  //     console.log(router.pathname, href)
  //     className = `${className} active`
  //   }

  return (
    <Link prefetch href={href} passHref>
      {React.cloneElement(<StyledLink>{children}</StyledLink>, { className })}
    </Link>
  )
}
