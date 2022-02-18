import { throwError } from '../errorHandler';
import News, { INews } from '../models/News';
import _ from 'underscore';

/** SQL query written to get news feeds with
 * sorting functionality,
 * filtering functionality,
 * search functionality.
 * */
export const getNews = async (sortBy: any, category: any | [], author: any | [], search: any): Promise<INews | any> => {
  try {
    const query = News.query();
    
    /** query for search field */
    if (search) {
      query.where(q => {
        q.where('News.category', 'like', `%${search}%`)
          .orWhere('News.headline', 'like', `%${search}%`)
          .orWhere('News.authorName', 'like', `%${search}%`);
      });
    }

    /** query for sort field by most recent uploaded news feeds */
    if (sortBy) {
      query.orderBy('News.uploadTime', 'desc');
    }

    /** query to filter news feeds by category */
    if (category && category.length) {
      query.whereIn('News.category', category);
    }

    /** query to filter news feeds by author */
    if (author && author.length) {
      query.whereIn('News.authorName', author);
    }
    return query;
  } catch (err) {
    throwError('Something went wrong.', 400);
  }
};
