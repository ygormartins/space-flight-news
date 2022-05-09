import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { HIDDEN_FIELDS } from 'src/constants/schema';
import { LaunchtDto } from './dto/launch.dto';
import { EventDto } from './dto/event.dto';

type ArticleDocument = Article & Document;

@Schema({
  toJSON: {
    transform: function (doc, ret) {
      for (const field of HIDDEN_FIELDS) {
        delete ret[field];
      }
    },
  },
})
class Article {
  @Prop({
    type: String,
    unique: true,
    index: true,
    required: false,
    immutable: true,
  })
  id: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String })
  url: string;

  @Prop({ type: String })
  imageUrl: string;

  @Prop({ type: String, required: true })
  newsSite: string;

  @Prop({ type: String })
  summary: string;

  @Prop({ type: Date, required: true })
  publishedAt: Date;

  @Prop({ type: Array, default: [] })
  launches: LaunchtDto[];

  @Prop({ type: Array, default: [] })
  events: EventDto[];

  @Prop({ type: Boolean, default: false })
  featured: boolean;
}

const ArticleSchema = SchemaFactory.createForClass(Article);

ArticleSchema.index({
  title: 'text',
  summary: 'text',
  newsSite: 'text',
});

ArticleSchema.pre('save', function (next) {
  this.id = uuidv4();
  next();
});

ArticleSchema.pre('insertMany', function (next, docs) {
  for (const doc of docs) {
    doc.id = uuidv4();
  }
  next();
});

export { Article, ArticleDocument, ArticleSchema };
