import express from "express";
import userController from "../../controllers/user.controllers";
import { createUserValidator } from "../../validators/user.validators";

const userRouter = express.Router();

userRouter.get("/:id", userController.getUser);
userRouter.get("/", userController.getAllUsers);

userRouter.post("/", createUserValidator, userController.createUser);

export default userRouter;
