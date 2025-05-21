import { model, models, Schema, Types } from "mongoose";

export interface IQuestion {
  author: Types.ObjectId;
  title: string;
  content: string;
  views: number;
  answers: number;
  upvotes: number;
  downvotes: number;
  tags: Types.ObjectId;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    views: { type: Number, default: 0 },
    answers: { type: Number, default: 0 },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  },
  { timestamps: true }
);

const Question =
  models?.Question || model<IQuestion>("Question", QuestionSchema);

export default Question;
