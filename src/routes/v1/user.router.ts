import express from "express";
import userController from "../../controllers/user.controllers";
import {
  createUserValidator,
  signInUserValidator,
} from "../../validators/user.validators";

const userRouter = express.Router();

userRouter.get("/:id", userController.getUser);
userRouter.get("/", userController.getAllUsers);

userRouter.post("/signup", createUserValidator, userController.createUser);
userRouter.post("/signin", signInUserValidator, userController.signin);

export default userRouter;
