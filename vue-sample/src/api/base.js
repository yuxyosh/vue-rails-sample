const axios = require('axios')

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

export const ApiBase = {
  get (path, {params = null, overWriteErrorHandlers = {}} = {}) {
    console.log(`GET request: ${path}`)
    return request(instance.get(path, {params: params}), overWriteErrorHandlers)
  },
  delete (path, {params = null, overWriteErrorHandlers = {}} = {}) {
    console.log(`DELETE request: ${path}`)
    return request(instance.delete(path, {params: params}), overWriteErrorHandlers)
  },
  post (path, {body = null, overWriteErrorHandlers = {}} = {}) {
    console.log(`POST request: ${path}`)
    return request(instance.post(path, body), overWriteErrorHandlers)
  },
  put (path, {body = null, overWriteErrorHandlers = {}} = {}) {
    console.log(`PUT request: ${path}`)
    return request(instance.put(path, body), overWriteErrorHandlers)
  }
}

function request (req, overWriteErrorHandlers) {
  return req
    .then((res) => {
      console.log(`Request complete: ${JSON.stringify(res.data)}`)
      return res
    })
    .catch((error) => {
      const handler = resolveErrorHandler(error, overWriteErrorHandlers)
      handler(error)
      throw error
    })
}

function resolveErrorHandler (error, overWriteErrorHandlers) {
  let errorCode = '000'
  if (error.response) {
    console.log(error.response)
    errorCode = error.response.status
  }
  let handler = overWriteErrorHandlers[errorCode] || defaultErrorHandlers[errorCode]
  if (!handler) {
    handler = () => { console.log(`errorCode ${errorCode} could not be handled.`) }
  }
  return handler
}

export const defaultErrorHandlers = {
  '500': function () { alert('500 Error') },
  '400': function () { alert('400 Error') },
  '000': function () { alert('000 Error') }
}
