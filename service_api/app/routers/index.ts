import { Router } from "express";
import userRouter from "./users";

const router = Router();

// Ici toutes les routes du userRouter seront préfixées par http://localhost:3002/users
router.use('/users', userRouter)

export default router;