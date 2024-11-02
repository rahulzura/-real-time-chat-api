import { Schema, SchemaTypes } from 'mongoose';
import { db } from '../db/mongo.js';

const userSchema = new Schema({
  username: {
    type: SchemaTypes.String,
    required: true,
    unique: true,
  },
  password: {
    type: SchemaTypes.String,
    required: true,
  },
});

export const UserModel = db.model('User', userSchema, 'users');
