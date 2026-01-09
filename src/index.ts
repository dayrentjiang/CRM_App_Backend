import express, { type Express, type Request, type Response } from "express";
import ServerConfig from "./config/server.config";
import cors from "cors";

const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "hello from ping" });
});

app.listen(ServerConfig.PORT, () => {
  console.log(`Server start in port ${ServerConfig.PORT} `);
});
