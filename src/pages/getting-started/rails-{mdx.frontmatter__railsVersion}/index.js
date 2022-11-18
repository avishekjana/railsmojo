import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
// import Layout from '../../../components/layout'
// import Seo from '../../../components/seo'

const BlogPage = ({ data, pageContext }) => {
  console.log(pageContext.frontmatter__railsVersion)
  return (
    <Layout pageTitle={`Getting Started in Rails ${pageContext.frontmatter__railsVersion}`}>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/getting-started/rails-${pageContext.frontmatter__railsVersion}/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query ($frontmatter__railsVersion: Int) {
    allMdx(
      filter: {frontmatter: {railsVersion: {eq: $frontmatter__railsVersion}, category: {eq: "getting-started"}}}
    ) {
      nodes {
        excerpt
        id
        frontmatter {
          slug
          title
        }
      }
    }
  }
`


export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage