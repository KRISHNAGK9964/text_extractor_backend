import mongoose, { Schema } from "mongoose";

const ImageSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    base64Image: {
      type: String,
      required: true,
    },
    boldWords: {
      type: String,
      required: true,
    },
    textContext: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Image = mongoose.models.User || mongoose.model("Image", userSchema);
export default Image;
