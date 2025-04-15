import mongoose from "mongoose";

const mongoURL = process.env.MONGO_URL!;
mongoose.connect(mongoURL);

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: false,
    },
    lastname: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    role_id: {
      type: Number,
      required: true,
      default: 2,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "users",
  }
);

const User = mongoose.model("User", userSchema);
export default User;