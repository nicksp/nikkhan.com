import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { rhythm } from '../utils/typography'

class Blog extends Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location}>
        <SEO title="Posts" />
        <Bio />
        <div style={{ margin: '20px 0 40px' }}>
          {posts.map(
            ({
              node: {
                excerpt,
                frontmatter: { title, date, description },
                fields: { slug }
              }
            }) => {
              const postTitle = title || slug
              return (
                <article key={slug}>
                  <header>
                    <h3
                      style={{
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
                        {postTitle}
                      </Link>
                    </h3>
                    <small style={{ fontStyle: 'italic' }}>{date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: description || excerpt
                      }}
                    />
                  </header>
                </article>
              )
            }
          )}
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fields: { type: { eq: "blog" } } }
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
