import { Schema, model, models } from "mongoose";

const informationSchema = new Schema({
  name: { type: String, require: true },
  age: { type: Number, require: true },
  desses: { type: String, require: true },
  number: { type: Number, require: true },
  telegramId: { type: String },
  email: { type: String },
});

const Information =
  models.Information || model("Information", informationSchema);

export default Information;
