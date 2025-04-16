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
        const { title, body, author } = req.body
        const newPost = new Post({
            title: title,
            body: body,
            author: author,
        })
        try {
            await newPost.save()
            console.log(newPost)
            res.status(201).json({ post: newPost })
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Erreur durant la création d'un post !" })
        }
    },
    async update(req: Request, res: Response) {
    },
    async delete(req: Request, res: Response) {
        const { id } = req.params
        try {
            await Post.findByIdAndDelete(id)
            res.status(200).json({ message: "Post supprimé !" })
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Erreur durant la suppression d'un post !" })
        }
    },
}

export default postController