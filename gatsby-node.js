const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query our pages from the GraphQL server
  const mdxPages = await getMdxPages({graphql, reporter})
  await createIndividualMdxPages({ mdxPages, actions });
}

async function getMdxPages({ graphql, reporter }) {
  const graphqlResult = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            category
            railsVersion
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your events`,
      graphqlResult.errors
    )
    return
  }
  return graphqlResult.data.allMdx.nodes
}


/**
 * This function creates all pages in this site
 */
 const createIndividualMdxPages = async ({ mdxPages, actions }) => {
  console.log(mdxPages)
  mdxPages.forEach(node => {
    // createPage is an action passed to createPages
    // See https://www.gatsbyjs.com/docs/actions#createPage for more info
    actions.createPage({
      // Use the WordPress uri as the Gatsby page path
      // This is a good idea so that internal links and menus work 👍
      path: `/${node.frontmatter.category}/rails-${node.frontmatter.railsVersion}/${node.frontmatter.slug}`,

      // use the blog post template as the page component
      // component: path.resolve(`./src/templates/blog-post.js`),
      // component: node.internal.contentFilePath,
      component: path.resolve("./src/templates/mdxPageTemplate.js"),
      // `context` is available in the template as a prop and
      // as a variable in GraphQL.
      context: { id: node.id, railsVersion: node.frontmatter.railsVersion }
    })
  })
}