import { Model } from 'objection';

export interface IUsers {
  id: number;
  userName: string;
  email: string;
  password: string;
  phone: string;
  gender: string;
  language: string;
  birthDate: Date;
  birthTime: string;
  tnc: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default class Users extends Model implements IUsers {
  public id: number;
  public userName: string;
  public email: string;
  public password: string;
  public phone: string;
  public gender: string;
  public language: string;
  public birthDate: Date;
  public birthTime: string;
  public tnc: boolean;
  public createdAt: Date;
  public updatedAt: Date;

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
