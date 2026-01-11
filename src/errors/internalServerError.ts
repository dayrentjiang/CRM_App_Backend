import { ReasonPhrases, StatusCodes } from "http-status-codes";
import GenericError from "./genericError";

export default class InternalServerError extends GenericError {
  constructor(message?: string) {
    const errorMessage = message || "Something went wrong, please try again later!";
    super(errorMessage, StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR);
    this.name = "InternalServerError";
  }
}
