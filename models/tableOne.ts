import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  Station: {
    type: String,
    require: true,
  },
  NVAA: {
    type: String,
    require: true,
  },
  VAA: {
    type: String,
    require: true,
  },
  SVAA: {
    type: String,
    require: true,
  },
  UNB: {
    type: String,
    require: true,
  },
});
