import { Request, Response } from "express";
import UserService from "../services/user.service";
import UserRepository from "../repositories/user.repository";

const userService: UserService = new UserService(new UserRepository());

const getUser = async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id as string;
    const response = await userService.get(userId);
    return res.status(200).json({
      message: "Successfully fetched the user",
      data: response,
      err: {},
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      err: error,
      success: true,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const response = await userService.getAll();
    return res.status(200).json({
      message: "Successfully fetched all users",
      data: response,
      err: {},
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      err: error,
      success: true,
    });
  }
};

export default {
  getUser,
  getAllUsers,
};
