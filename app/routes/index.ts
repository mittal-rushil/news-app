import * as Router from 'koa-router';
import userRoutes from './userRoutes';
import {
  UserController,
  NewsController,
} from '../controllers';

export default (route: Router) => {
  userRoutes(route);
  
  /**
   * API to verify user existance in the system
   */
  route.get(
    '/app/home/user',
    UserController.getUser,
  );

  /**
   * API to get news feeds including sort, filter(Category & Author) and search in query params
   */
  route.get(
    '/app/home/news',
    NewsController.getNews,
  );
};
