"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class Users extends objection_1.Model {
    static get tableName() {
        return 'Users';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'number' },
                userName: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                phone: { type: 'string' },
                gender: { type: 'string' },
                language: { type: 'string' },
                birthDate: { type: 'timestamp' },
                birthTime: { type: 'string' },
                tnc: { type: 'boolean' },
                createdAt: { type: 'timestamp' },
                updatedAt: { type: 'timestamp' },
            },
        };
    }
}
exports.default = Users;
//# sourceMappingURL=User.js.map