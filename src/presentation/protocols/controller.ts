import type { HttpeResponde, HttpRequest } from './http'

export interface Controller {
  handle: (httpRequest: HttpRequest) => HttpeResponde
}
