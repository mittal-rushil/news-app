import { throwError } from '../errorHandler';
import { IUsers } from '../models';
import Users from '../models/User';

/**
 * select query to get user details on the basis of email from Users table
 * @param email
 * @returns
 */
export const getUser = async (email: any): Promise<IUsers | any> => {
  const response: any = await Users.query().where({ email }).first();
  if (!response) {
    throwError('User not found. Access Denied!', 404);
  }
  return response;
};

/**
 * select query to get user details using user id from Users table
 * @param id
 * @returns
 */
export const getUserById = async (id: number): Promise<IUsers | any> => {
  const response: any = await Users.query().where({ id }).first();
  if (!response) {
    throwError('User not found.', 404);
  }
  return response;
};

/**
 * insert query to create new user by inserting data in Users table
 * @param body
 * @param email
 * @param password
 * @returns
 */
export const createUser = async (body: IUsers | any, email: string | any, password: string | any):
Promise<IUsers | any> => {
  const response: any = await Users.query().insertGraphAndFetch({
    ...body,
    email,
    password,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  if (!response && !response.length) {
    throwError('Unable to create user.', 404);
  }
  return response;
};

/**
 * Update query to update user details in Users table
 * @param id
 * @param body
 * @param email
 * @param password
 * @returns
 */
export const updateUser = async (id: number, body: IUsers | any, email: string, password: string | any):
Promise<IUsers | any> => {
  if (email && email !== '') {
    body.email = email;
  }
  if (password && password !== '') {
    body.password = password;
  }
  const response: any = await Users.query().patchAndFetchById(id, {
    ...body,
    updatedAt: new Date(),
  });
  if (!response && !response.length) {
    throwError('Unable to update user.', 404);
  }
  return response;
};

/**
 * Delete query to remove the user using user id from Users table
 * @param id
 * @returns
 */
export const removeUser = async (id: number): Promise<IUsers | any> => {
  try {
    await Users.query().where({ id }).del();
    return;
  } catch (err) {
    throwError('Unable to delete user.', 400);
  }
};
