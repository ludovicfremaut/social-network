import express from "express";
import debug from "debug";
import path from "path";
import router from "./app/routers";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const PORT = 3000;
const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", router);

app.listen(PORT, () => {
  debug("app:main")(`Server is running on http://localhost:${PORT}`);
});