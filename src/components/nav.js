import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const NavWrapper = styled('nav')`
  display: flex;
  justify-content: space-between;
`

const List = styled('ul')`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
`

const NavItem = styled('li')`
  padding: 0 0.25rem;
`

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    background-image: linear-gradient(to bottom, #ff9800 0%, #ff9800 100%);
    background-size: 4px 50px;
    color: #fff;
  }
`

const Nav = ({ children, menuLinks }) => (
  <NavWrapper>
    {children}
    <List>
      {menuLinks.map(link => (
        <NavItem key={link.name}>
          <NavLink to={link.link} activeClassName="current-page">
            {link.name}
          </NavLink>
        </NavItem>
      ))}
    </List>
  </NavWrapper>
)

export default Nav
