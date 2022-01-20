import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaOptions, Document, Types } from 'mongoose';
import { Socket as SocketModel } from './sockets.model';

const options: SchemaOptions = {
  collection: 'chattings',
  timestamps: true,
};

@Schema(options)
export class Chatting extends Document {
  @Prop({
    type: {
      _id: { type: Types.ObjectId, required: true, ref: 'sockets' },
      id: { type: String },
      username: { type: String, required: true },
    },
  })
  user: SocketModel;

  @Prop()
  chat: string;
}

export const ChattingSchema = SchemaFactory.createForClass(Chatting);
