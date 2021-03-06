import React from 'react'
import { css } from '@emotion/core'
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
    max-width: 600px;
  }
`

const Main = styled('main')`
  margin: 2.4rem 0;
`

const Footer = styled('footer')`
  margin: 0 auto 1rem auto;
  text-align: center;
`

const Layout = ({ children, location }) => {
  return (
    <Wrapper>
      <Header location={location} />
      <Main>{children}</Main>
      <Footer>
        Copyright © 2019
        <span
          css={css`
            margin-left: 1px;
            letter-spacing: 1px;
          `}
        >
          ...
        </span>
        {new Date().getFullYear()} Nick S. Plekhanov
      </Footer>
    </Wrapper>
  )
}

export default Layout
