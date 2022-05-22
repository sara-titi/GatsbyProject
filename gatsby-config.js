const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Gatsby Project `,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, 'src/components')
        },
        extensions: []
      }
    }
  ]
};






// // gatsby-config.js
// const path = require("path");

// module.exports = {
//   siteMetadata: {
//     title: `test`,
//     siteUrl: `https://www.yourdomain.tld`
//   },
//   plugins: [
//     {
//       resolve: "gatsby-plugin-root-import",
//       options: {
//         resolveModules: [path.join(__dirname, "libs")],
//         utils: path.join(__dirname, "src", "components", "utilities"),
//       },
//     },
//   ],
// };