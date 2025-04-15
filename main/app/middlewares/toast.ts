import { NextFunction, Request, Response } from "express"


export default function toastMessage(req: Request, res: Response, next: NextFunction) {
    const flashMessages = req.cookies?.flashMessages
    if(flashMessages) {
      // On récupère les messages flash dans nos vues (locals)
      res.locals.flashMessages = flashMessages
      // On vide le tableau (pour éviter de réafficher le message quand on va changer de page)
      res.cookie("flashMessages", [])
    }
    next();
}