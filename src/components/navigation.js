import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const List = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const NavLink = styled(Link)`
  color: #000;
  background: none;
  padding-bottom: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    color: #ff9800;
    background: none;
    border-color: rgba(255, 152, 0, 0.15);
  }
`

const Navigation = ({ previous, next, type }) => {
  const isNote = type === 'notes'
  const prevDate = isNote && previous && `[${previous.frontmatter.date}]`
  const nextDate = isNote && next && `[${next.frontmatter.date}]`

  return (
    <nav>
      <List>
        <li>
          {previous && (
            <NavLink to={previous.fields.slug} rel="prev">
              ← {prevDate} {previous.frontmatter.title}
            </NavLink>
          )}
        </li>
        <li>
          {next && (
            <NavLink to={next.fields.slug} rel="next">
              {nextDate} {next.frontmatter.title} →
            </NavLink>
          )}
        </li>
      </List>
    </nav>
  )
}

export default Navigation
