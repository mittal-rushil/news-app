"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNews = void 0;
const errorHandler_1 = require("../errorHandler");
const services_1 = require("../services");
const getNews = async (ctx) => {
    try {
        const { sortBy, search, category, author } = ctx.request.query;
        let categoryArray;
        if (category) {
            const filterCateagory = category;
            categoryArray = filterCateagory ? filterCateagory.split(',') : [];
        }
        let authorArray;
        if (author) {
            const filterAuthor = author;
            authorArray = filterAuthor ? filterAuthor.split(',') : [];
        }
        const response = await services_1.NewsServices.getNews(sortBy, categoryArray, authorArray, search);
        ctx.body = response;
    }
    catch (err) {
        (0, errorHandler_1.handleValidationError)(ctx, err);
    }
};
exports.getNews = getNews;
//# sourceMappingURL=newsControllers.js.map