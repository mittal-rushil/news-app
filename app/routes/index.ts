import * as Router from 'koa-router';
import userRoutes from './userRoutes';
import {
  UserController,
  NewsController,
} from '../controllers';

export default (route: Router) => {
  userRoutes(route);
  route.get(
    '/app/home/user',
    UserController.getUser,
  );

  route.get(
    '/app/home/news',
    NewsController.getNews,
  );
};
