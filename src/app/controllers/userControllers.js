"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUser = void 0;
const errorHandler_1 = require("../errorHandler");
const validations_1 = require("../helpers/validations");
const services_1 = require("../services");
const EmailValidator = require("email-validator");
const bcrypt = require('bcryptjs');
const getUser = async (ctx) => {
    try {
        const { email } = ctx.request.query;
        const response = await services_1.UserServices.getUser(email);
        ctx.body = response;
    }
    catch (err) {
        (0, errorHandler_1.handleValidationError)(ctx, err);
    }
};
exports.getUser = getUser;
const getUserById = async (ctx) => {
    try {
        const { id } = ctx.params;
        const response = await services_1.UserServices.getUserById(Number(id));
        ctx.body = response;
    }
    catch (err) {
        (0, errorHandler_1.handleValidationError)(ctx, err);
    }
};
exports.getUserById = getUserById;
const createUser = async (ctx) => {
    try {
        const body = ctx.request.body;
        await (0, validations_1.validateReqBody)(body);
        if (!body.tnc) {
            (0, errorHandler_1.throwError)('Kindly read and approve Terms and Conditions', 404);
        }
        const email = body.email && EmailValidator.validate(body.email.toLowerCase()) === true ?
            body.email.toLowerCase() : (0, errorHandler_1.throwError)('Invalid Email!', 400);
        delete body.email;
        let password;
        if (body.password) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(body.password.toString(), salt);
            password = hash;
            delete body.password;
        }
        else {
            (0, errorHandler_1.throwError)('Kindly provide Password', 404);
        }
        const response = await services_1.UserServices.createUser(body, email, password);
        ctx.body = response;
    }
    catch (err) {
        (0, errorHandler_1.handleValidationError)(ctx, err);
    }
};
exports.createUser = createUser;
const updateUser = async (ctx) => {
    try {
        const { id } = ctx.params;
        const body = ctx.request.body;
        await (0, validations_1.validateReqBody)(body);
        let email;
        if (body.email) {
            email = body.email && EmailValidator.validate(body.email.toLowerCase()) === true ?
                body.email.toLowerCase() : (0, errorHandler_1.throwError)('Invalid Email!', 400);
            delete body.email;
        }
        let password;
        if (body.password) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(body.password.toString(), salt);
            password = hash;
            delete body.password;
        }
        const response = await services_1.UserServices.updateUser(Number(id), body, email, password);
        ctx.body = response;
    }
    catch (err) {
        (0, errorHandler_1.handleValidationError)(ctx, err);
    }
};
exports.updateUser = updateUser;
const removeUser = async (ctx) => {
    try {
        const { id } = ctx.params;
        const response = await services_1.UserServices.removeUser(Number(id));
        ctx.body = response;
    }
    catch (err) {
        (0, errorHandler_1.handleValidationError)(ctx, err);
    }
};
exports.removeUser = removeUser;
//# sourceMappingURL=userControllers.js.map