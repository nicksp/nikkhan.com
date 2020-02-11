/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                type
              }
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages
  const posts = result.data.allMdx.edges

  const componentMap = {
    blog: path.resolve(`./src/templates/post.js`),
    notes: path.resolve(`./src/templates/note.js`)
  }

  // Split into different lists for easier filtering
  const notes = []
  const blogs = []
  const others = []

  posts.forEach(post => {
    switch (post.node.fields.type) {
      case 'notes':
        return notes.push(post)
      case 'blog':
        return blogs.push(post)
      default:
        return others.push(post)
    }
  })

  const lists = [notes, blogs, others]
  for (list of lists) {
    for (const [index, post] of list.entries()) {
      const { type: postType, slug } = post.node.fields
      const previous = index === list.length - 1 ? null : list[index + 1].node
      const next = index === 0 ? null : list[index - 1].node

      createPage({
        path: slug,
        component: componentMap[postType],
        context: {
          slug,
          previous,
          next
        }
      })
    }
  }
}

const regexp = new RegExp(`^${__dirname}/content/([^/]+)/`)

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === 'Mdx') {
    const postType = node.fileAbsolutePath.match(regexp)[1]
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value: `${postType}${value}`
    })

    const parsedPostPath = node.fileAbsolutePath.replace(__dirname, '')
    createNodeField({
      name: 'editLink',
      node,
      value: `https://github.com/nicksp/nikkhan.com/edit/master${parsedPostPath}`
    })

    createNodeField({
      name: 'type',
      node,
      value: postType
    })
  }
}
