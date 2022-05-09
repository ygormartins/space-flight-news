import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { HIDDEN_FIELDS } from 'src/constants/schema';
import mongoose from 'mongoose';

type LogDocument = Log & Document;

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
class Log {
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

const LogSchema = SchemaFactory.createForClass(Log);

LogSchema.pre('save', function (next) {
  this.id = uuidv4();
  next();
});

LogSchema.pre('insertMany', function (next, docs) {
  for (const doc of docs) {
    doc.id = uuidv4();
  }
  next();
});

export { LogDocument, Log, LogSchema };
