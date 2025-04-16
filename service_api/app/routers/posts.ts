import { Router } from "express";
import postController from "../controllers/postController";

const postRouter = Router();

postRouter.get("/", postController.list);
// postRouter.get("/:id", postController.detail);
postRouter.post("/", postController.create);
postRouter.put("/:id", postController.update);
postRouter.delete("/:id", postController.delete);

export default postRouter;