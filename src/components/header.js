import React from 'react'
import { css } from '@emotion/core'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Nav from './nav'

const Header = ({ location, title }) => {
  const { site } = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const { menuLinks } = site.siteMetadata
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`
  let header

  if (location.pathname === rootPath || location.pathname === blogPath) {
    header = (
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
          to={location.pathname === blogPath ? '/blog/' : '/'}
        >
          {title}
        </Link>
      </h3>
    )
  } else {
    header = (
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
          to="/blog/"
        >
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <header
      css={css`
        padding: 30px 0px 0px;
      `}
    >
      <Nav menuLinks={menuLinks}>{header}</Nav>
    </header>
  )
}

export default Header
