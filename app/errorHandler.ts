import { Context } from 'koa';

class ErrorMsg extends Error {
  public statusCode: number;

  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, ErrorMsg.prototype);
  }
}

export const throwError = (errorMessage: string, statusCode?: number) => {
  const error: ErrorMsg = new ErrorMsg(errorMessage);

  if (!statusCode) {
    statusCode = 400;
  }

  error.statusCode = statusCode;

  throw error;
};

export const handleValidationError = (ctx: Context, err: Error & { data: {} }) => {
  if (err.data) {
    ctx.body = { error: err.data };
    ctx.status = 400;
    return;
  }

  throw err;
};
