const axios = require('axios')

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

export const ApiBase = {
  get (path, {params = null, overWriteErrorHandlers = {}} = {}) {
    return instance.get(path, {params: params})
      .then((res) => {
        return res
      })
      .catch((error) => {
        const handler = resolveErrorHandler(error, overWriteErrorHandlers)
        handler(error)
        throw error
      })
  }
}

function resolveErrorHandler (error, overWriteErrorHandlers) {
  let errorKey = '000'
  if (error.response) {
    console.log(error.response)
    errorKey = error.response.status
  }
  let handler = overWriteErrorHandlers[errorKey] || defaultErrorHandlers[errorKey]
  if (!handler) {
    handler = () => { console.log(`errorKey ${errorKey} could not be handled.`) }
  }
  return handler
}

export const defaultErrorHandlers = {
  '500': function () { alert('500 Error') },
  '400': function () { alert('400 Error') },
  '000': function () { alert('000 Error') }
}
