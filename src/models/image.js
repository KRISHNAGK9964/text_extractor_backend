import mongoose, { Schema } from "mongoose";

const ImageSchema = new Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    base64Image: {
      type: String,
      required: true,
    },
    boldWords: {
      type: String,
      required: true,
    },
    textContent: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Image = mongoose.model("Image", ImageSchema);
export default Image;
