import React from 'react'
import styled from '@emotion/styled'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { rhythm } from '../utils/typography'

const NoteTitle = styled('h3')`
  font-size: 1.15rem;
  margin-top: ${rhythm(1 / 1.5)};
  margin-bottom: ${rhythm(1 / 4)};
`

const NoteLink = styled(Link)`
  box-shadow: none;
  padding-top: 2px;
  line-height: 1.5;
  background-image: linear-gradient(
    to right,
    #ffbf00a6 70%,
    #ffbf00a6 0px
  ) !important;
  background-size: 4px 13px !important;
  background-position: 0 98%;
  background-repeat: repeat-x;
  padding-left: 1px;
  padding-right: 1px;
  padding-bottom: 0;

  &:hover {
    background-position: 0 98%;
  }
`

const Notes = ({ location, data }) => {
  const notes = data.allMdx.edges

  return (
    <Layout location={location}>
      <SEO title="Notes & TILs" keywords={['javascript', 'react', 'notes']} />
      Noting things down for the future me.
      <div style={{ margin: '20px 0 40px' }}>
        {notes.map(
          ({
            node: {
              fields: { slug },
              frontmatter: { title, date }
            }
          }) => (
            <article key={slug}>
              <header>
                <NoteTitle>
                  <NoteLink to={slug}>{`[${date}] ${title}`}</NoteLink>
                </NoteTitle>
              </header>
            </article>
          )
        )}
      </div>
    </Layout>
  )
}

export default Notes

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fields: { type: { eq: "notes" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            type
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
          }
        }
      }
    }
  }
`
