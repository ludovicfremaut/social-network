import mongoose, { Types } from "mongoose";

const mongoURL = process.env.MONGO_URL!;
mongoose.connect(mongoURL);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "posts",
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
