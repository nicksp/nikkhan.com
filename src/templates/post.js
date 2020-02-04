import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import HyvorTalk from 'hyvor-talk-react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import Bio from '../components/bio'
import Meta from '../components/meta'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { rhythm } from '../utils/typography'

class BlogPostTemplate extends Component {
  render() {
    const { mdx, site } = this.props.data
    const { previous, next } = this.props.pageContext
    const post = mdx
    const { editLink, slug } = post.fields
    const siteTitle = site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(1)
              }}
            >
              {post.frontmatter.title}
            </h1>
          </header>
          <section>
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>

          <Meta postDate={post.frontmatter.date} editLink={editLink} />

          {process.env.NODE_ENV === 'production' && (
            <HyvorTalk.Embed websiteId={206} id={slug} loadMode="scroll" />
          )}

          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={`blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
        editLink
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      body
    }
  }
`
