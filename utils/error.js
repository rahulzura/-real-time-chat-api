export class ServerError extends Error {
  constructor(message, { statusCode = 500, cause }) {
    super(message, { cause });
    this.name = 'ServerError';
    this.statusCode = statusCode;
  }
}
