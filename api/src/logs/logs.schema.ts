import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { HIDDEN_FIELDS } from 'src/constants/schema';
import mongoose from 'mongoose';

export type LogDocument = Log & Document;

@Schema({
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      for (const field of HIDDEN_FIELDS) {
        delete ret[field];
      }
    },
  },
})
export class Log {
  @Prop({
    type: String,
    unique: true,
    index: true,
    required: false,
    immutable: true,
  })
  id: string;

  @Prop({ type: Boolean, required: true })
  error: boolean;

  @Prop({ type: String })
  message: string;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  params: any;
}

export const LogSchema = SchemaFactory.createForClass(Log)
  .pre('save', function (next) {
    this.id = uuidv4();
    next();
  })
  .pre('insertMany', function (next, docs) {
    for (const doc of docs) {
      doc.id = uuidv4();
    }
    next();
  });
