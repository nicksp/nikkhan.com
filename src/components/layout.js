import React from 'react'
import styled from '@emotion/styled'

import Header from './header'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 800px;
  min-height: 100vh;
  padding: 0 1rem;
  @media (max-width: 1400px) {
    max-width: 600;
  }
`

const Main = styled('main')`
  margin: 2.4rem auto;
`

const Footer = styled('footer')`
  margin: 0 auto 1rem auto;
  text-align: center;
`

const Layout = ({ children, location, title }) => {
  return (
    <Wrapper>
      <Header location={location} title={title} />
      <Main>{children}</Main>
      <Footer>Copyright © {new Date().getFullYear()} Nick S. Plekhanov</Footer>
    </Wrapper>
  )
}

export default Layout
