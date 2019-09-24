import axios from 'axios'
import swal from 'sweetalert'
import { camelizeKeys, decamelizeKeys } from 'humps'

const timeoutMs = 30000
const largeTimeoutMs = 300000

let baseUrl = 'http://localhost:3000/'

const httpInstance = axios.create({
  baseURL: baseUrl,
  timeout: timeoutMs,
  // NOTE: Rails の reauest.xhr? 判定のため
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
})

const CancelToken = axios.CancelToken

export default {
  // request cancel
  cancelSource: CancelToken.source(),
  cancel (message) {
    this.cancelSource.cancel(message)
    this.cancelSource = CancelToken.source()
  },
  // get, delete -> (use params)
  async get (
    path,
    { params = null, header = {}, errorHandlers = {}, cancelToken = this.cancelSource.token, timeout = null } = {}
  ) {
    console.log(`[GET] Request: ${path}`)
    return checkResponse(
      httpInstance.get(
        path, { params: decamelizeKeys(params), headers: header, cancelToken, timeout }
      ),
      errorHandlers
    )
  },
  async delete (
    path,
    { params = null, header = {}, errorHandlers = {}, cancelToken = this.cancelSource.token, timeout = null } = {}
  ) {
    console.log(`[DELETE] Request: ${path}`)
    return checkResponse(
      httpInstance.delete(
        path, { params: decamelizeKeys(params), headers: header, cancelToken, timeout }
      ),
      errorHandlers
    )
  },
  // post put, -> (use body)
  async post (
    path,
    { body = null, header = {}, errorHandlers = {}, cancelToken = this.cancelSource.token, timeout = null } = {}
  ) {
    console.log(`[POST] Request: ${path}`)
    return checkResponse(
      httpInstance.post(
        path, decamelizeKeys(body), { headers: header, cancelToken, timeout }
      ),
      errorHandlers
    )
  },
  async put (
    path,
    { body = null, header = {}, errorHandlers = {}, cancelToken = this.cancelSource.token, timeout = null } = {}
  ) {
    console.log(`[PUT] Request: ${path}`)
    return checkResponse(
      httpInstance.put(
        path, decamelizeKeys(body), { headers: header, cancelToken, timeout }
      ),
      errorHandlers
    )
  },
  // large data
  async getLargeData (path, args = {}) {
    args.timeout = largeTimeoutMs
    return this.get(path, args)
  },
  async deleteLargeData (path, args = {}) {
    args.timeout = largeTimeoutMs
    return this.delete(path, args)
  },
  // postFile , -> (use data)
  async postFile (
    path,
    { data = null, header = {}, errorHandlers = {}, cancelToken = this.cancelSource.token, timeout = largeTimeoutMs } = {}
  ) {
    console.log(`[POST] Request: ${path}`)
    const headers = Object.assign(
      { 'content-type': 'multipart/form-data' },
      header
    )
    return checkResponse(
      httpInstance.post(
        path, data, { headers, cancelToken, timeout }
      ),
      errorHandlers
    )
  }
}

function checkResponse (req, errorHandlers) {
  return req
    .then((res) => {
      console.log(`[Response] Status: ${res.status}`)
      if (res.status !== 204) {
        res.data = camelizeKeys(res.data)
        console.log(res.data)
      }
      return res
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.log(error.message)
        throw error
      } else {
        const handler = resolveErrorHandler(error, errorHandlers)
        handler(error)
        throw error
      }
    })
}

function resolveErrorHandler (error, errorHandlers) {
  let errorCode = '000'
  if (error.response) {
    console.log(error.response)
    errorCode = error.response.status
  }
  let handler = errorHandlers[errorCode] || defaultErrorHandlers[errorCode]
  if (handler == null) {
    handler = () => { console.log(`errorCode ${errorCode} could not be handled.`) }
  }
  return handler
}

export const defaultErrorHandlers = {
  '000': function () { swal(`Network Error`) },
  '400': function () { swal(`400 Bad Request`) },
  '401': function () { swal(`401 Unauthorized`) },
  '403': function () { swal(`403 Forbidden`) },
  '404': function () { swal(`404 Not Found`) },
  '422': function () { swal(`422 Unprocessable Entity`) },
  '500': function () { swal(`500 Internal Server Error`) },
  '503': function () { swal(`503 Service Unavailable`) }
}
