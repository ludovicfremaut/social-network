import { Request, Response } from "express";
import debug from "debug";

const mainDebug = debug("app:main");

const log = debug("app:main:mainController");
const AUTHENTICATION_SERVICE_URL = process.env.AUTHENTICATION_SERVICE_URL!;
const API_SERVICE_URL = process.env.API_SERVICE_URL!;

const mainController = {
  // -------------
  // PARTIE LOGIN
  // -------------

  getLogin(req: Request, res: Response) {
    // TODO rediriger vers le feed si on est déjà connecté - vu en correction journée 4
    
    mainDebug("Affichage de la page login");
    res.render("login");
  },
  async postLogin(req: Request, res: Response) {
    // TODO ici le traitement du login (POST) - le traitement doit être fait dans un service authentification (requête fetch) - challenge journée 3
    // TODO stocker le token JWT dans les cookies
    // TODO rediriger l'utilisateur sur la page feed une fois connecté

    log("Envoi du formulaire de login");
    const { email, password } = req.body;

    // je fetch mon service authentification, dans le but de récupèrer le token JWT
    try {
      const response = await fetch(`${AUTHENTICATION_SERVICE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // transmission des données
      });
      const result = await response.json();
      if (result.data.token) {
        res.cookie("token", result.data.token, {
          sameSite: "strict",
          httpOnly: true,
        });
        // on redirige l'utilisateur sur la page feed

        res.cookie("flashMessages", [{
          type: "success",
          message: "Connexion au site réussi !"
        }] )

        res.redirect("/feed");
      }
    } catch (err) {
      if (err instanceof Error) {
        return console.error(err);
      }
    }
  },
  getLogout(req: Request, res: Response) {
    //* OK ici le traitement du logout (POST) - challenge journée 3 - rediriger vers la page home
    //* OK supprimer le cookie JWT
    //* OK supprimer le cookie flashMessages
    //* ok rediriger l'utilisateur sur la page home

    res.clearCookie("token");
    res.clearCookie("flashMessages");
    res.redirect("/");
  },

  // -------------
  // PARTIE REGISTER
  // -------------

  getRegister(req: Request, res: Response) {
    // TODO rediriger vers le feed si on est déjà connecté - à faire en fin de journée 4
    res.render("register");
  },

  async postRegister(req: Request, res: Response) {
    console.log("REGISTER", req.body);
    try {
      const response = await fetch(`${AUTHENTICATION_SERVICE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();

      if (data) {

        // Juste avant la redirection, je génère mon message
        // Je redirige mon utilisateur, les cookies, vont pouvoir être récupérés dans la page login
        res.cookie("flashMessages", [{
          type: "success",
          message: "Inscription au site réussi, connectez-vous !"
        }]);

        res.redirect("/login");
      }
    } catch (err) {
      console.log(err);
    }
    // Dans le formulaire, on a actuellement 4 champs
    // - username
    // - email
    // - password
    // - confirmPassword

    // TODO ici le traitement du register (POST) - à faire en fin de journée 4
  },

  // -------------
  // PARTIE HOME
  // -------------

  async getHome(req: Request, res: Response) {
    // TODO rediriger vers le feed si on est déjà connecté
    if (req.cookies.token) {
      res.redirect("/feed");
      return;
    }

    res.render("home");
  },

  // -------------
  // PARTIE FEED
  // -------------

  async getFeed(req: Request, res: Response) {
    try {
      // TODO - Récupérer les posts et les utilisateurs dans le service API

      // Récupération des Users

      const UserResponse = await fetch(`${API_SERVICE_URL}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const userData = await UserResponse.json()
      const users = userData.users
      // debug("app:main:controller")(users);

      // Récupération des posts
      const PostResponse = await fetch(`${API_SERVICE_URL}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const postData = await PostResponse.json()
      const posts = postData.posts
      // debug("app:main:controller")(posts);
      
      if (!users) {
        return console.log("No users in database");
      }
      res.render("feed", { 
        users,
        posts,
      });
    } catch (error) {
      return console.log(error);
    }
  },

  // -------------
  // PAGE PROFILE
  // -------------

  async getProfile(req: Request, res: Response) {
    console.log("Appel de la fonction getProfile");
    res.render("profile");
  },
};

export default mainController;
