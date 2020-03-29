import * as axios from 'axios'

declare module 'axios' {
  interface AxiosResponse {
    code: number,
    message: string,
    success?: boolean,
    completeResponse?: any,
  }
}
