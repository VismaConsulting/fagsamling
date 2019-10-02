module.exports = {
  siteMetadata: {
    title: `Visma Consulting Fagsamling`,
    description: `Websidene til Visma Consulting sine fagsamlinger`,
    author: `@andersems && @bjornosal`,
    currentFagsamling: "2019-10",
    siteUrl: "https://fagsamling.vismaconsulting.no",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fagsamling med Visma Consulting`,
        short_name: `Fagsamling`,
        start_url: `/`,
        background_color: `#007ACA`,
        theme_color: `#007ACA`,
        display: `minimal-ui`,
        icon: `src/images/visma-just-logo.png`,
      },
    },
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-offline`
    //`gatsby-plugin-remove-serviceworker`
  ],
}
