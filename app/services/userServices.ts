import { throwError } from '../errorHandler';
import { IUsers } from '../models';
import Users from '../models/User';

export const getUser = async (email: any): Promise<IUsers | any> => {
  const response: any = await Users.query().where({ email }).first();
  if (!response) {
    throwError('User not found. Access Denied!', 404);
  }
  return response;
};

export const getUserById = async (id: number): Promise<IUsers | any> => {
  const response: any = await Users.query().where({ id }).first();
  if (!response && !response.length) {
    throwError('User not found.', 404);
  }
  return response;
};

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

export const removeUser = async (id: number): Promise<IUsers | any> => {
  try {
    await Users.query().where({ id }).del();
    return;
  } catch (err) {
    throwError('Unable to delete user.', 400);
  }
};
