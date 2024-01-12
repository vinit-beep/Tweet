import { CustomError } from "../utills/CustumError.js";
import dotenv from "dotenv";
dotenv.config();

const devErrors = (res, error) => {
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
    stackTrace: error.stack,
    error: error,
  });
};

const prodError = (res, error) => {
  // when isOperational is true then and then send this error because at custoum error handler we set its true, only need to send operational errors.

  if (error.isOperational) {
    res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Someting went wrong! try later.",
    });
  }
};

// this is handle production and devolopment side error ,because at production side we dont need to send all types of error we only need to send operational errors.

export const GlobelErrorr = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  if (process.env.NODE_ENV === "development") {
    devErrors(res, error);
  } else if (process.env.NODE_ENV === "production") {
    // first check type of error
    // Invalid ID error handler
    if (error.name === "CastError") {
      const msg = `Invalid Value ${err.value} for field ${err.path}`;
      error = new CustomError(msg, `400`);
    }
    // duplicate key error handler
    if (error.code === 11000) {
      error = new CustomError(
        `there is already email with name ${error.keyValue.email}`,
        400
      );
    }
    // validation errr handler
    if (error._original) {
      const errors = Object.values(error.details).map((e) => e.message);
      error = new CustomError(`Invalid input data: ${errors}`, 400);
    }
    prodError(res, error);
  }
  next(); // this is important because we need to pass the error to the next middleware.
};
