"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = require("./userRoutes");
const controllers_1 = require("../controllers");
exports.default = (route) => {
    (0, userRoutes_1.default)(route);
    route.get('/app/home/user', controllers_1.UserController.getUser);
    route.get('/app/home/news', controllers_1.NewsController.getNews);
};
//# sourceMappingURL=index.js.map