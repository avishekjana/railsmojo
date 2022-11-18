import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'

import Seo from '../components/seo'
import Layout from '../components/layout'
import {
  navLinkText,
} from '../components/layout.module.css'

const IndexPage = ({ data }) => {
  let defaultVersion = data.site.siteMetadata.defaultRailsVersion

  return (
    <Layout pageTitle="Home Page">
      <p>I'm making railsMojo using Rails {defaultVersion}</p>
      <Link to={`/getting-started/rails-${6}`} className={navLinkText}>
        Getting Started in Rails {6}
      </Link>
      <Link to={`/getting-started/rails-${7}`} className={navLinkText}>
        Getting Started in Rails {7}
      </Link>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        defaultRailsVersion
      }
    }
  }
`

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

export default IndexPage
