import { HttpStatusCode } from "../constants/http-status-codes";
import { Response } from "express";

type ConstructorType = {
  statusCode: HttpStatusCode;
  status?: string;
  message?: string;
  data?: Object;
};

/**
 * ApiResponse class represents a standardized response structure for API responses.
 */
class ApiResponse {
  /**
   * Constructs an ApiResponse object with the provided parameters.
   * @param statusCode - HTTP status code for the response.
   * @param status - Status indicator (e.g., 'SUCCESS', 'FAILED').
   * @param message - A descriptive message associated with the response.
   * @param data - Optional data object to include in the response.
   */
  constructor(res: Response, props: ConstructorType) {
    res.status(props.statusCode).json({
      statusCode: props.statusCode,
      status: props.status,
      message: props.message,
      data: props.data,
    });
  }
}

export { ApiResponse };
