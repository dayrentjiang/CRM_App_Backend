//Business Logic

import UserRepository from "../repositories/user.repository";
import { User } from "../generated/prisma/client";
import CreateUserDto from "../dtos/createUser.dto";
import bcrypt from "bcryptjs";
import serverConfig from "../config/server.config";

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async get(id: string): Promise<User> {
    try {
      const response: User | null = await this.userRepository.get(id);
      if (!response) {
        throw { error: "userId not found" };
      }
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAll(): Promise<User[]> {
    try {
      const response: User[] = await this.userRepository.getAll();
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async create(userDetails: CreateUserDto): Promise<User> {
    try {
      //Encrypt Password Here using bycrptjs
      const salt = bcrypt.genSaltSync(serverConfig.SALT_ROUNDS);
      userDetails.password = bcrypt.hashSync(userDetails.password, salt);
      const response: User = await this.userRepository.create(userDetails);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default UserService;
