export default abstract class GenericError extends Error {
  public statusCode: number;
  public reason: string | object | null;
  public errorMessage: string;

  constructor(
    message: string,
    statusCode: number,
    reason: string | object | null = null
  ) {
    super(message);
    this.errorMessage = message;
    this.statusCode = statusCode;
    this.reason = reason;

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    // Set the prototype explicitly for proper instanceof checks
    Object.setPrototypeOf(this, GenericError.prototype);
  }
}
