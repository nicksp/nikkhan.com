import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import Meta from '../components/meta'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import SEO from '../components/seo'

import { rhythm, scale } from '../utils/typography'

const ContentSection = styled('section')`
  a {
    padding-top: 4px;
  }
`

const NotePostTemplate = ({
  data,
  pageContext: { previous, next },
  location
}) => {
  const { mdx } = data
  const note = mdx
  const { editLink, type } = note.fields
  const { title, description, date } = note.frontmatter

  return (
    <Layout location={location}>
      <SEO title={title} description={description || note.excerpt} />
      <h1>
        <span style={{ ...scale(1 / 2) }}>[{date}]</span> {title}
      </h1>
      <ContentSection>
        <MDXRenderer>{note.body}</MDXRenderer>
      </ContentSection>

      <Meta postDate={date} editLink={editLink} />

      <hr
        style={{
          marginBottom: rhythm(1)
        }}
      />

      <Navigation type={type} previous={previous} next={next} />
    </Layout>
  )
}

export default NotePostTemplate

export const pageQuery = graphql`
  query NotePostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      fields {
        type
        editLink
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
      }
      body
    }
  }
`
