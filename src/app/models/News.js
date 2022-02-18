"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class News extends objection_1.Model {
    static get tableName() {
        return 'News';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'number' },
                authorName: { type: 'string' },
                category: { type: 'string' },
                headline: { type: 'string' },
                image: { type: 'string' },
                newsLink: { type: 'string' },
                uploadTime: { type: 'timestamp' },
                createdAt: { type: 'timestamp' },
                updatedAt: { type: 'timestamp' },
            },
        };
    }
}
exports.default = News;
//# sourceMappingURL=News.js.map