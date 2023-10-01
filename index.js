/* ---- Methods ---- */

function success (res, message) {
  return sendResponse(res, 'ok', 200, message)
}

function create (res, message) {
  return sendResponse(res, 'ok', 201, message)
}

function simpleError (res, statusCode, message) {
  return sendResponse(res, 'error', statusCode, message)
}

function serverError (res) {
  const statusCode = 500
  const message = 'Houve um erro interno. Por favor tente novamente mais tarde ou entre em contato com o suporte.'

  return sendResponse(res, 'error', statusCode, message)
}

/* ---- Aux Functions ---- */

function sendResponse (res, status, statusCode, body) {
  res
    .status(statusCode)
    .json({ status, statusCode, body })
}

module.exports = {
  success,
  create,
  simpleError,
  serverError
}
