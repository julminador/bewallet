export function logErrors(error, req, res, next) {
  console.error('[logErrors] ', error);
  next(error);
};

export function boomErrorHandler(error, req, res, next) {
  if (!error.isBoom) next(error);
  const { output } = error;
  res.status(output.statusCode).json(output.payload);
};

export function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  })
};

export default { logErrors, errorHandler };