import { Request, Response } from "express"

import Post from '../models/Post';

const postController = {
    async list(req: Request, res: Response) {
        // Ici si je lui dis
        // -> const posts = await Post.find().populate('author_id') 
        // Il va remplacer author_id par un objet User complet (en chargeant en EAGER loading les datas liées à la collection User)
        // -> const posts = await Post.find()
        // author_id sera juste un object id (uuid vers le document User)

        // -1 => DESC, 1 => ASC
        const posts = await Post.find().populate('author').sort({ updated_at: -1 });
        res.status(200).json({ posts: posts })
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

export default postController