"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReqBody = void 0;
const errorHandler_1 = require("../errorHandler");
const validateReqBody = async (body) => {
    for (const key in body) {
        if (body.hasOwnProperty(key)) {
            const value = body[key].toString();
            if (!value) {
                (0, errorHandler_1.throwError)(`${key} is a mandatory field. Kindly provide.`, 400);
            }
        }
    }
};
exports.validateReqBody = validateReqBody;
//# sourceMappingURL=validations.js.map