require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Periodic Table`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-mongodb`,
      options: { connectionString: process.env.CONNECTION_STRING, dbName: process.env.DB_NAME, collection: process.env.COLLECTION?.split(','), preserveObjectIds: true}
    },
  ],
}

export default config
