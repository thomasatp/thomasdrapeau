/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Thomas Drapeau`,
    description: `UI designer et front end developer en devenir.`,
    siteUrl: `https://www.thomasdrapeau.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-LBTBR15EC7", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-LBTBR15EC7", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: "YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-tagmanager", // default
          dataLayerName: "dataLayer", // default
        },
        facebookPixel: {
          pixelId: "YOUR_FACEBOOK_PIXEL_ID", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-facebook-pixel", // default
        },
        tikTokPixel: {
          pixelId: "YOUR_TIKTOK_PIXEL_ID", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-tiktok-pixel", // default
        },
        hotjar: {
          hjid: "YOUR_HOTJAR_ID",
          hjsv: "YOUR_HOTJAR_SNIPPET_VERSION",
          cookieName: "gatsby-gdpr-hotjar", // default
        },
        linkedin: {
          trackingId: "YOUR_LINKEDIN_TRACKING_ID", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-linked-in", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
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
        name: `Thomas Drapeau`,
        short_name: `Thomas Drapeau`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
