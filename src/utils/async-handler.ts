import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "./api-response";
import { HttpStatusCode } from "../constants/http-status-codes";

type FunctionType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

/**ss
 * @param {Function} fun - The asynchronous controller function to be wrapped.
 * @returns - An Express middleware function that handles asynchronous errors.
 */
export const asyncHandler = (fn: FunctionType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await fn(req, res, next);
    } catch (error) {
      // Handle any errors that occur during the execution of the controller function
      console.log("Error : ", error)
      return new ApiResponse(res, {
          statusCode: error.code || HttpStatusCode.INTERNAL_SERVER_ERROR,
          status: "INTERNAL_SERVER_ERROR",
          message: error.message
      })
    }
  };
};
