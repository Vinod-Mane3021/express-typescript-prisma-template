import { HttpStatusCode } from "../constants/http-status-codes";
import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../utils/api-response";
import { asyncHandler } from "../utils/async-handler";

export const healthController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {

    return new ApiResponse(res, {
        statusCode: HttpStatusCode.OK,
        status: "SUCCESS",
        message: "working fine"
    })
  }
);
