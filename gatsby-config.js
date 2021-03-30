module.exports = {
  siteMetadata: {
    title: 'retrofitting-suburbia',
  },
  pathPrefix: '/retrofitting-suburbia',
  plugins: [
    'gatsby-plugin-emotion',
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
