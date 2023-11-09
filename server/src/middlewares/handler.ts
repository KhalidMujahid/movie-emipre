import { Request, Response, NextFunction } from "express";

function routeNotFound(req: Request, res: Response, next: NextFunction) {
  const error = new Error(`${req.originalUrl} route not found`);
  res.status(404);
  next(error);
}

function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.send({
    message: error.message,
    stack: process.env.NODE_ENV === "development" ? error.stack : "",
  });
}

export { routeNotFound, errorHandler };
