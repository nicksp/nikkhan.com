import React from 'react'
import { css } from '@emotion/core'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Nav from './nav'

const Header = ({ location }) => {
  const { site } = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const { title, menuLinks } = site.siteMetadata
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <header
      css={css`
        padding: 30px 0px 0px;
      `}
    >
      <Nav menuLinks={menuLinks}>
        <h3
          css={css`
            margin-top: 0;
          `}
        >
          <Link
            css={css`
              box-shadow: none;
              text-decoration: none;
              color: inherit;
            `}
            to="/"
          >
            {location.pathname !== rootPath && title}
          </Link>
        </h3>
      </Nav>
    </header>
  )
}

export default Header
