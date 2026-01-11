import { ReasonPhrases, StatusCodes } from "http-status-codes";
import GenericError from "./genericError";

export default class UnauthorizedError extends GenericError {
  constructor(message?: string) {
    const errorMessage = message || "Invalid login credentials, please try again with correct credentials";
    super(errorMessage, StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED);
    this.name = "UnauthorizedError";
  }
}
