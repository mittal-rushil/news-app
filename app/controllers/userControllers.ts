import { IRouterContext } from 'koa-router';
import { handleValidationError, throwError } from '../errorHandler';
import { validateReqBody } from '../helpers/validations';
import { UserServices } from '../services';
import * as EmailValidator from 'email-validator';
const bcrypt = require('bcryptjs');

/**
 * To verify user existance
 * @param email
 */
export const getUser = async (ctx: IRouterContext): Promise<any> => {
  try {
    const { email } = ctx.request.query;
    const response = await UserServices.getUser(email);
    ctx.body = response;
  } catch (err) {
    handleValidationError(ctx, err);
  }
};

/**
 * To get user by id
 * @param id
 */
export const getUserById = async (ctx: IRouterContext): Promise<any> => {
  try {
    const { id } = ctx.params;
    const response = await UserServices.getUserById(Number(id));
    ctx.body = response;
  } catch (err) {
    handleValidationError(ctx, err);
  }
};

/**
 * To create user
 * Request body in JSON
 * @param ctx
 */
export const createUser = async (ctx: IRouterContext): Promise<any> => {
  try {
    const body = ctx.request.body;

    /** to validate request JSON body does not miss any mandatory field */
    await validateReqBody(body);

    /** To check terms and conditions are selected. If not throws error */
    if (!body.tnc) {
      throwError('Kindly read and approve Terms and Conditions', 404);
    }

    /** Validating email format */
    const email = body.email && EmailValidator.validate(body.email.toLowerCase()) === true ?
      body.email.toLowerCase() : throwError('Invalid Email!', 400);
    delete body.email;

    /** Converting password into hash to store in database. */
    let password;
    if (body.password) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(body.password.toString(), salt);
      password = hash;
      delete body.password;
    } else {
      throwError('Kindly provide Password', 404);
    }
    const response = await UserServices.createUser(body, email, password);
    ctx.body = response;
  } catch (err) {
    handleValidationError(ctx, err);
  }
};

/**
 * To update user details by id
 * request body in JSON
 * @param id
 */
export const updateUser = async (ctx: IRouterContext): Promise<any> => {
  try {
    const { id } = ctx.params;
    const body = ctx.request.body;
    await validateReqBody(body);
    let email;
    if (body.email) {
      email = body.email && EmailValidator.validate(body.email.toLowerCase()) === true ?
        body.email.toLowerCase() : throwError('Invalid Email!', 400);
      delete body.email;
    }
    let password;
    if (body.password) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(body.password.toString(), salt);
      password = hash;
      delete body.password;
    }
    const response = await UserServices.updateUser(Number(id), body, email, password);
    ctx.body = response;
  } catch (err) {
    handleValidationError(ctx, err);
  }
};

/**
 * To delete user by id
 * @param id
 */
export const removeUser = async (ctx: IRouterContext): Promise<any> => {
  try {
    const { id } = ctx.params;
    await UserServices.removeUser(Number(id));
    ctx.body = 'User successfully removed';
  } catch (err) {
    handleValidationError(ctx, err);
  }
};
