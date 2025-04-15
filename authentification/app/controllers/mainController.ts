import type { Request, Response } from "express";
import { hash, verify } from "../crypto/scrypt";
import debug from "debug";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

const log = debug("app:authentication:mainController");

const API_SERVICE_URL = process.env.API_SERVICE_URL!;
const JWT_SECRET = process.env.JWT_SECRET!;
interface TokenCredentials {
  id: ObjectId;
  firstname: string;
  email: string;
  role: number;
}

function generateToken(tokenCredentials: TokenCredentials): string {
  log("generate token for", tokenCredentials);
  const token = jwt.sign(
    {
      user: {
        firstname: tokenCredentials.firstname,
        email: tokenCredentials.email,
        role: tokenCredentials.role,
        id: tokenCredentials.id,
      },
    },
    JWT_SECRET,
    {
      expiresIn: "4h",
    }
  );
  return token;
}

const mainController = {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    log("login", req.body);

    // TODO - Login à refaire (fetch vers le service API)
    try {
      const response = await fetch(`${API_SERVICE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // transmission des données
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
      return;
      
    }

    /*const user = await User.findOne({ email });
    if (!user || !(await verify(password, user.password))) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    // RAPPEL : conformément à la RGPD, il est déconseillé de stocker l'email dans le JWT (règlement de la protection des données personnelles)
    const token = generateToken({
      id: user.id,
      firstname: user.firstname || "",
      email: user.email,
      role: user.role_id,
    });
    res.json({ status: "success", data: { token } });*/
  },

  async cryptPassword(req: Request, res: Response) {
    const password = "test";
    if (password) {
      const passwordHash = await hash(password.toString());
      res.json({ status: "success", data: { password, passwordHash } });
    }
  },

  async postRegister(req: Request, res: Response) {
    const { firstname, lastname, email, password, description, image } =
      req.body;
    // console.log(req.body);

    // TODO - Vérifier que l'email n'existe pas déjà ...

    const hashedPassword = await hash(password.toString());
    // console.log(hashedPassword);

    if (!hashedPassword) {
      console.log("erreur lors du hash");
      res.json({ err: "Merci de réessayer" }).status(500)
    }

    // TODO - Refaire cette partie - on va devoir faire un fetch vers le service API

    /*const newUser = new User({
      firstname: firstname,
      lastname,
      email,
      password: hashedPassword,
      description,
      image,
    });

    try {
      await newUser.save();
      console.log(newUser);
      res.json({ user: newUser }).status(201)
    } catch (err) {
      console.log(err);
      res.status(500)
    }*/
  },
};

export default mainController;
