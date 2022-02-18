"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
exports.default = (route) => {
    route.get('/app/user/:id', controllers_1.UserController.getUserById);
    route.post('/app/user', controllers_1.UserController.createUser);
    route.put('/app/user/:id', controllers_1.UserController.updateUser);
    route.delete('/app/user/:id', controllers_1.UserController.removeUser);
};
//# sourceMappingURL=userRoutes.js.map