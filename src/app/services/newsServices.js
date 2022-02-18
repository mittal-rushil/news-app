"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNews = void 0;
const errorHandler_1 = require("../errorHandler");
const News_1 = require("../models/News");
const getNews = async (sortBy, category, author, search) => {
    try {
        const query = News_1.default.query();
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
    }
    catch (err) {
        (0, errorHandler_1.throwError)('Something went wrong.', 400);
    }
};
exports.getNews = getNews;
//# sourceMappingURL=newsServices.js.map