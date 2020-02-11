import React, { Component } from 'react'
import styled from '@emotion/styled'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { rhythm } from '../utils/typography'

const PostTitle = styled('h3')`
  margin-bottom: ${rhythm(1 / 4)};
`

const PostLink = styled(Link)`
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
`

const DateMeta = styled('small')`
  font-style: italic;
`

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
                    <PostTitle>
                      <PostLink to={slug}>{postTitle}</PostLink>
                    </PostTitle>
                    <DateMeta>{date}</DateMeta>
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
