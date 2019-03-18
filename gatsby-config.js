module.exports = {
  siteMetadata: {
    title: `Visma Consulting Fagsamling`,
    description: `Websidene til fagsamlingene til Visma Consulting`,
    author: `@andersems`,
    currentFagsamling: '2019-03',
    siteUrl: 'https://fagsamling.vismaconsulting.no'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fagsamling med Visma Consulting`,
        short_name: `fagsamling`,
        start_url: `/`,
        background_color: `#007ACA`,
        theme_color: `#007ACA`,
        display: `minimal-ui`,
        icon: `src/images/visma-just-logo.png`
      },
    },
    // 'gatsby-plugin-offline',
    `gatsby-plugin-remove-serviceworker`
  ],
}
