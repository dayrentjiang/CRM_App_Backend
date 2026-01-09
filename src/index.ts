import "dotenv/config";
import express, { Express, Request, Response } from "express";
import ServerConfig from "./config/server.config";
import cors from "cors";
import bodyParser from "body-parser";
import apiRouter from "./routes";
import cookieParser from "cookie-parser";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//////////////
//API ROUTER//
//////////////
app.use("/api", apiRouter);

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "hello from ping" });
});

app.listen(ServerConfig.PORT, () => {
  console.log(`Server start in port ${ServerConfig.PORT}`);
});
