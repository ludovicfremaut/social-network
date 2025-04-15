import { Router } from "express";
import mainController from "../controllers/mainController";
import checkAuth from "../middlewares/checkAuth";
import toastMessage from "../middlewares/toast";

const router = Router();

// Le middleware sera utilisé par toutes les routes
router.use(toastMessage);

// PAS DE MIDDLEWARE ICI
router.get("/", mainController.getHome);

// PAS DE MIDDLEWARE ICI (LOGIN/REGISTER)

router.get("/register", mainController.getRegister);
router.post("/register", mainController.postRegister);
router.get("/login", mainController.getLogin);
router.post("/login",  mainController.postLogin);

// ON A BESOIN DU MIDDLEWARE ICI (centralisation du middleware pour l'ensemble des routes déclarées dans le)
router.get("/feed", checkAuth, mainController.getFeed);
router.get("/profile", checkAuth, mainController.getProfile);
router.get("/logout", checkAuth, mainController.getLogout);


export default router;