import { MyContext } from 'src/types'
import { MiddlewareFn } from 'type-graphql'

declare module 'express-session' {
  interface Session {
    userId: number | undefined
  }
}

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error('not authenticated')
  }

  return next()
}
