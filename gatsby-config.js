module.exports = {
  siteMetadata: {
    title: `RailsMojo`,
    siteUrl: `https://www.railsmojo.org`,
    defaultRailsVersion: 7
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-8T87ETX93N"
      }
    }, 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-mdx", 
    "gatsby-transformer-remark", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `content-repo`,
        remote: `https://github.com/railsmojo/railsmojo-content.git`,
        // Specify the local checkout location, to avoid it being trashed on
        // cache clears.
        branch: `master`,
        // Multiple patterns and negation supported. See https://github.com/mrmlnc/fast-glob
        // patterns: [`*.mdx`]
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ]
};