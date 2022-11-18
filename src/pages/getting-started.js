import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPost = ({ data, children, pageContext }) => {
  console.log(pageContext)
  return (
    <Layout pageTitle="Getting Started">
      <p>Hello</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const Head = () => <Seo title="Getting Started" />

export default BlogPost