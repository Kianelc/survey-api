import type { HttpeResponde } from '../protocols/http'
import { ServerError } from '../errors/server-error'

export const badRequest = (error: Error): HttpeResponde => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpeResponde => ({
  statusCode: 500,
  body: new ServerError()
})
