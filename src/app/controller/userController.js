"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const errorHandler_1 = require("../errorHandler");
const get = async (ctx) => {
    try {
        console.log(ctx);
    }
    catch (err) {
        (0, errorHandler_1.handleValidationError)(ctx, err);
    }
};
exports.get = get;
//# sourceMappingURL=userController.js.map