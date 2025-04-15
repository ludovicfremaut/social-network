import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", userController.list);
userRouter.get("/:id", userController.detail);
userRouter.post("/", userController.create);
userRouter.put("/:id", userController.update);
userRouter.delete("/:id", userController.delete);

export default userRouter;