import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import Footer from '../components/footer'
import SEO from '../components/seo'

const Wrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1280px;

  @media (max-width: 800px) {
    flex-direction: column;
    height: unset;
    margin: 0 auto;
  }
`

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
`

const ImageSection = styled('section')`
  flex: 1;
  padding: 0 2rem 0 2rem;
  position: relative;

  @media (max-width: 800px) {
    padding: 2rem 1rem;
    width: 100%;
  }
`

const InfoSection = styled('section')`
  box-sizing: border-box;
  flex: 2;
  padding: 0 2rem 0 2rem;

  @media (max-width: 800px) {
    padding: 2rem 2rem;
    width: 100%;
  }
`

const Header = styled('h1')`
  animation: ${bounce} 1s ease;
  animation-delay: 500ms;

  @media (max-width: 400px) {
    font-size: 2.8rem;
  }
`

const Portrait = styled(Image)`
  display: block;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 800px) {
    width: 60%;
  }
`

const IndexPage = ({ location }) => {
  const { avatar } = useStaticQuery(graphql`
    query AvatarQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      <SEO
        title="Full Stack Developer"
        keywords={[
          `personal`,
          `node.js`,
          `javascript`,
          `react`,
          `architecture`,
          `code design`,
          `productivity`,
          `business`
        ]}
      />
      <Wrapper>
        <ImageSection>
          <Portrait
            alt="Nick S. Plekhanov"
            fluid={avatar.childImageSharp.fluid}
          />
        </ImageSection>

        <InfoSection>
          <p>
            Hey folks{' '}
            <span role="img" aria-label="wave emoji">
              👋
            </span>
          </p>

          <Header>I'm Nick.</Header>

          <p>
            I'm a seasoned fullstack developer who specializes in Node.js
            services and React applications.
          </p>
          <p>
            This is my digital place to talk about software engineering, and
            share insights from my experience.
          </p>
          <Footer />
        </InfoSection>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
