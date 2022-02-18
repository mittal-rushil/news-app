"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUser = void 0;
const errorHandler_1 = require("../errorHandler");
const User_1 = require("../models/User");
const getUser = async (email) => {
    const response = await User_1.default.query().where({ email }).first();
    if (!response) {
        (0, errorHandler_1.throwError)('User not found. Access Denied!', 404);
    }
    return response;
};
exports.getUser = getUser;
const getUserById = async (id) => {
    const response = await User_1.default.query().where({ id }).first();
    if (!response && !response.length) {
        (0, errorHandler_1.throwError)('User not found.', 404);
    }
    return response;
};
exports.getUserById = getUserById;
const createUser = async (body, email, password) => {
    const response = await User_1.default.query().insertGraphAndFetch(Object.assign(Object.assign({}, body), { email,
        password, createdAt: new Date(), updatedAt: new Date() }));
    if (!response && !response.length) {
        (0, errorHandler_1.throwError)('Unable to create user.', 404);
    }
    return response;
};
exports.createUser = createUser;
const updateUser = async (id, body, email, password) => {
    if (email && email !== '') {
        body.email = email;
    }
    if (password && password !== '') {
        body.password = password;
    }
    const response = await User_1.default.query().patchAndFetchById(id, Object.assign(Object.assign({}, body), { updatedAt: new Date() }));
    if (!response && !response.length) {
        (0, errorHandler_1.throwError)('Unable to update user.', 404);
    }
    return response;
};
exports.updateUser = updateUser;
const removeUser = async (id) => {
    try {
        await User_1.default.query().where({ id }).del();
        return;
    }
    catch (err) {
        (0, errorHandler_1.throwError)('Unable to delete user.', 400);
    }
};
exports.removeUser = removeUser;
//# sourceMappingURL=userServices.js.map