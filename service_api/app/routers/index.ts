import { Router } from "express";
import userRouter from "./users";
import postRouter from "./posts";

const router = Router();

// Ici toutes les routes du userRouter seront préfixées par http://localhost:3002/users
router.use('/users', userRouter)
router.use('/posts', postRouter)

export default router;