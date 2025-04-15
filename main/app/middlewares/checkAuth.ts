import debug from "debug";
import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!
const log = debug("app:middlewares:checkAuth");

// AVANTAGE : LE CODE DE RECUPERATION DU MIDDLEWARE EST CENTRALISE
// POUR L'ENSEMBLE DE L'APPLICATION

export default function checkAuth(req: Request, res: Response, next: NextFunction) {
    log("Appel du middleware CheckAuth ...")
    const token = req.cookies?.token;
    if (token) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
            // res.locals permet de stocker les infos pour toutes
            // les pages du site 
            res.locals.user = decoded.user;
            next();
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                log(error.message);
                res.redirect('/login');
                return;
            }
        }
    } else {
        res.redirect('/login');
        return;
    }
}