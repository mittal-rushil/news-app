import { throwError } from '../errorHandler';

export const validateReqBody = async (body: any): Promise<any> => {
  for (const key in body) {
    if (body.hasOwnProperty(key)) {
      const value = body[key].toString();
      if (!value) {
        throwError(`${key} is a mandatory field. Kindly provide.`, 400);
      }
    }
  }
};
