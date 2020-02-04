import React, { Component } from 'react'

import { rhythm } from '../utils/typography'

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(1.25),
          paddingTop: rhythm(1)
        }}
      >
        <a
          href="https://github.com/nicksp"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.linkedin.com/in/nickplekhanov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        {''}
      </footer>
    )
  }
}

export default Footer
