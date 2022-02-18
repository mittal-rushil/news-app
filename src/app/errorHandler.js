"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = exports.throwError = void 0;
class ErrorMsg extends Error {
    constructor(m) {
        super(m);
        Object.setPrototypeOf(this, ErrorMsg.prototype);
    }
}
const throwError = (errorMessage, statusCode) => {
    const error = new ErrorMsg(errorMessage);
    if (!statusCode) {
        statusCode = 400;
    }
    error.statusCode = statusCode;
    throw error;
};
exports.throwError = throwError;
const handleValidationError = (ctx, err) => {
    if (err.data) {
        ctx.body = { error: err.data };
        ctx.status = 400;
        return;
    }
    throw err;
};
exports.handleValidationError = handleValidationError;
//# sourceMappingURL=errorHandler.js.map