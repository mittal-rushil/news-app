import { IRouterContext } from 'koa-router';
import { handleValidationError } from '../errorHandler';
import { NewsServices } from '../services';

export const getNews = async (ctx: IRouterContext): Promise<any> => {
  try {
    const { sortBy, search, category, author } = ctx.request.query;
    /** To handle multiple categories */
    let categoryArray;
    if (category) {
      const filterCateagory: any = category;
      categoryArray = filterCateagory ? filterCateagory.split(',') : [];
    }
    /** To handle multiple authors */
    let authorArray;
    if (author) {
      const filterAuthor: any = author;
      authorArray = filterAuthor ? filterAuthor.split(',') : [];
    }
    const response = await NewsServices.getNews(sortBy, categoryArray, authorArray, search);
    ctx.body = response;
  } catch (err) {
    handleValidationError(ctx, err);
  }
};
