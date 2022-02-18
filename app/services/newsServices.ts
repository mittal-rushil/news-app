import { throwError } from '../errorHandler';
import News, { INews } from '../models/News';
import _ from 'underscore';

export const getNews = async (sortBy: any, category: any | [], author: any | [], search: any): Promise<INews | any> => {
  try {
    const query = News.query();
    if (search) {
      query.where(q => {
        q.where('News.category', 'like', `%${search}%`)
          .orWhere('News.headline', 'like', `%${search}%`)
          .orWhere('News.authorName', 'like', `%${search}%`);
      });
    }
    if (sortBy) {
      query.orderBy('News.uploadTime', 'desc');
    }
    if (category && category.length) {
      query.whereIn('News.category', category);
    }
    if (author && author.length) {
      query.whereIn('News.authorName', author);
    }
    return query;
  } catch (err) {
    throwError('Something went wrong.', 400);
  }
};
