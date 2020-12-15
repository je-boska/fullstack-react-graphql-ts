import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import { Post } from './entities/Post'
import microConfig from './mikro-orm.config'
import express from 'express'

const main = async () => {
  // CONNECT TO DATABASE
  const orm = await MikroORM.init(microConfig)

  // RUN MIGRATIONS
  await orm.getMigrator().up()

  const app = express()
  app.listen(4000, () => {
    console.log('Server started on localhost:4000')
  })
}

main().catch(err => {
  console.error(err)
})
