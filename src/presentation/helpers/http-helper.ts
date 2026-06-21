import type { HttpeResponde } from '../protocols/http'

export const badRequest = (error: Error): HttpeResponde => ({
  statusCode: 400,
  body: error
})
