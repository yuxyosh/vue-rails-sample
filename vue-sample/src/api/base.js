const axios = require('axios')

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

export const ApiBase = {
  get ({path, params, overWriteErrorHandlers}) {
    return instance.get(path)
      .then((res) => {
        return res
      })
      .catch((err) => {
        const handler = resolveErrorHandler(err, overWriteErrorHandlers)
        handler(err)
        throw err
      })
  }
}

function resolveErrorHandler (error, overWriteErrorHandlers) {
  const errorKey = error.status ? error.status : '000'
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
