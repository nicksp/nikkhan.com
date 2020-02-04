import React from 'react'
import styled from '@emotion/styled'

const PostMeta = styled('section')`
  margin: 1.4rem 0;
  font-size: 80%;
  font-style: italic;
`

const PostMetaLink = styled('a')`
  background: none;
  text-decoration: underline;

  &:hover {
    background: none;
    text-decoration: underline;
  }
`

const PostMetaSeparator = styled('span')`
  margin-left: 4px;
  margin-right: 4px;
`

const Meta = ({ editLink, postDate }) => (
  <PostMeta>
    <PostMetaLink target="_blank" rel="noopener noreferrer" href={editLink}>
      Edit on Github
    </PostMetaLink>

    <PostMetaSeparator>{` • `}</PostMetaSeparator>

    <span>Published on {postDate}</span>
  </PostMeta>
)

export default Meta
