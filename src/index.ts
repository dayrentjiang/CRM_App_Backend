import "dotenv/config";
import express, { type Express, type Request, type Response } from "express";
import ServerConfig from "./config/server.config";
import { PrismaClient } from "./generated/prisma";

import cors from "cors";

const app: Express = express();
const prisma = new PrismaClient();

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

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server start in port ${ServerConfig.PORT} `);
  const user = await prisma.user.create({
    data: {
      name: "Rich",
      email: "rich@example.com",
      password: "12345678",
    },
  });
  console.log(user);
});
