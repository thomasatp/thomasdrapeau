/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Thomas Drapeau`,
    description: `UI designer et front end developer en devenir.`,
    siteUrl: `https://www.thomasdrapeau.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    "gatsby-plugin-transition-link",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.thomasdrapeau.com`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "fr",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
