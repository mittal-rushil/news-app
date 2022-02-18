import { Model } from 'objection';

export interface INews {
  id: number;
  authorName: string;
  category: string;
  headline: string;
  image: string;
  newsLink: string;
  uploadTime: Date;
  createdAt: Date;
  updatedAt: Date;
}

export default class News extends Model implements INews {
  public id: number;
  public authorName: string;
  public category: string;
  public headline: string;
  public image: string;
  public newsLink: string;
  public uploadTime: Date;
  public createdAt: Date;
  public updatedAt: Date;

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
