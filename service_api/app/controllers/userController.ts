import { Request, Response } from "express"
import User from "../models/User"

const userController = {
    async list(req: Request, res: Response) {
        const users = await User.find()
        res.status(200).json({ users: users })
    },
    async detail(req: Request, res: Response) {
    },
    async create(req: Request, res: Response) {
    },
    async update(req: Request, res: Response) {
    },
    async delete(req: Request, res: Response) {
    },
}

export default userController