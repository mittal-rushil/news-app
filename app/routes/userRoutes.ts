import * as Router from 'koa-router';
import {
  UserController,
} from '../controllers';

export default (route: Router) => {
  route.get(
    '/app/user/:id',
    UserController.getUserById,
  );

  route.post(
    '/app/user',
    UserController.createUser,
  );

  route.put(
    '/app/user/:id',
    UserController.updateUser,
  );

  route.delete(
    '/app/user/:id',
    UserController.removeUser,
  );
};
