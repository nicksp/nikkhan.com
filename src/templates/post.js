import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import HyvorTalk from 'hyvor-talk-react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import Bio from '../components/bio'
import Meta from '../components/meta'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import SEO from '../components/seo'

import { rhythm } from '../utils/typography'

const ContentSection = styled('section')`
  a {
    padding-top: 4px;
  }
`

class BlogPostTemplate extends Component {
  render() {
    const { data, pageContext, location } = this.props
    const { mdx } = data
    const { previous, next } = pageContext
    const post = mdx
    const { editLink, type, slug } = post.fields
    const { title, date, description } = post.frontmatter

    return (
      <Layout location={location}>
        <SEO title={title} description={description || post.excerpt} />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(1)
              }}
            >
              {title}
            </h1>
          </header>

          <ContentSection>
            <MDXRenderer>{post.body}</MDXRenderer>
          </ContentSection>

          <Meta postDate={date} editLink={editLink} />

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

        <Navigation type={type} previous={previous} next={next} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
        type
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
