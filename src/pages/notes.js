import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { rhythm } from '../utils/typography'

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
                <h3
                  style={{
                    fontSize: '1.15rem',
                    marginTop: rhythm(1 / 1.5),
                    marginBottom: rhythm(1 / 4)
                  }}
                >
                  <Link
                    style={{
                      boxShadow: `none`,
                      paddingTop: `2px`,
                      lineHeight: 1.7
                    }}
                    to={slug}
                  >
                    {`[${date}] ${title}`}
                  </Link>
                </h3>
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
