const axios = require('axios')

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

export const ApiBase = {
  get (path, {params = null, errorHandlers = {}} = {}) {
    console.log(`GET request: ${path}`)
    return request(instance.get(path, {params: params}), errorHandlers)
  },
  delete (path, {params = null, errorHandlers = {}} = {}) {
    console.log(`DELETE request: ${path}`)
    return request(instance.delete(path, {params: params}), errorHandlers)
  },
  post (path, {body = null, errorHandlers = {}} = {}) {
    console.log(`POST request: ${path}`)
    return request(instance.post(path, body), errorHandlers)
  },
  put (path, {body = null, errorHandlers = {}} = {}) {
    console.log(`PUT request: ${path}`)
    return request(instance.put(path, body), errorHandlers)
  }
}

function request (req, errorHandlers) {
  return req
    .then((res) => {
      console.log(`Request complete: ${JSON.stringify(res.data)}`)
      return res
    })
    .catch((error) => {
      const handler = resolveErrorHandler(error, errorHandlers)
      handler(error)
      throw error
    })
}

function resolveErrorHandler (error, errorHandlers) {
  let errorCode = '000'
  if (error.response) {
    console.log(error.response)
    errorCode = error.response.status
  }
  let handler = errorHandlers[errorCode] || defaultErrorHandlers[errorCode]
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
