import { Request, Response } from "express"
import User from "../models/User"
import { hash } from "crypto"

const userController = {
    async list(req: Request, res: Response) {
        const users = await User.find()
        res.status(200).json({ users: users })
    },
    async detail(req: Request, res: Response) {
        const email = req.params.id
        const user = await User.findOne({ email: email })
        res.status(200).json({ user: user })
    },
    async create(req: Request, res: Response) {
        const { firstname, lastname, email, password, description, image } =
            req.body
        const newUser = new User({
            firstname,
            lastname,
            email,
            password,
            description,
            image,
        })
    },
    async update(req: Request, res: Response) {
        const email = req.params.id
        const { firstname, lastname, password, description, image } =
            req.body    
    },
    async delete(req: Request, res: Response) {
    },
}

export default userController