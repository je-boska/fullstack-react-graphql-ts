import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import microConfig from './mikro-orm.config'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { HelloResolver } from './resolvers/hello'

const main = async () => {
  // CONNECT TO DATABASE
  const orm = await MikroORM.init(microConfig)

  // RUN MIGRATIONS
  await orm.getMigrator().up()

  const app = express()

  // CREATE GRAPHQL ENDPOINT ON SERVER
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  })

  apolloServer.applyMiddleware({ app })

  app.listen(4000, () => {
    console.log('Server started on localhost:4000')
  })
}

main().catch(err => {
  console.error(err)
})
