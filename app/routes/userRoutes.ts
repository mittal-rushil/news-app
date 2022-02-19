import * as Router from 'koa-router';
import {
  UserController,
} from '../controllers';

export default (route: Router) => {

  /** API to get user data by id */
  route.get(
    '/app/user/:id',
    UserController.getUserById,
  );

  /** API to create new user */
  route.post(
    '/app/user',
    UserController.createUser,
  );

  /** API to update user data by id */
  route.put(
    '/app/user/:id',
    UserController.updateUser,
  );

  /** API to delete user data by id */
  route.delete(
    '/app/user/:id',
    UserController.removeUser,
  );
};
