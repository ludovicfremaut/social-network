import { Request, Response } from "express";
import User from "../models/User";

const userController = {
  async list(req: Request, res: Response) {
    const users = await User.find();
    res.status(200).json({ users: users });
  },

  async findByEmail(req: Request, res: Response) {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json({ user });
  },

  async create(req: Request, res: Response) {
    const { firstname, lastname, email, password, hashedPassword, description, image } =
      req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(409).json({ message: "User already exists" });
      return;
    }
    const newUser = new User({
      firstname: firstname,
      lastname,
      email,
      password,
      description,
      image,
    });
    try {
      await newUser.save();
      console.log(newUser);
      res.status(201).json({ user: newUser });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "Erreur durant la création d'un utilisateur !" });
    }
  },

  async update(req: Request, res: Response) {},

  async delete(req: Request, res: Response) {},
};

export default userController;
