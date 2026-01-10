//Business Logic

import UserRepository from "../repositories/user.repository";
import { User } from "../generated/prisma/client";
import CreateUserDto from "../dtos/createUser.dto";
import bcrypt from "bcryptjs";
import serverConfig from "../config/server.config";
import SignInDto from "../dtos/signin.dto";
import { sign } from "node:crypto";
import { generateJWT } from "../utils/auth.utils";

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

  async signIn(signInDetail: SignInDto): Promise<string> {
    try {
      const user = await this.userRepository.getUserByEmail(signInDetail.email);
      if (!user) {
        throw { err: "not found" };
      }
      //Match the password if user is found
      const doesPasswordMath = bcrypt.compareSync(
        signInDetail.password,
        user.password
      );

      if (!doesPasswordMath) {
        throw { err: "Wrong password" };
      }

      //we will return a JWT token
      const jwt = generateJWT({
        id: user.id,
        email: user.email,
        role: user.roles,
      });

      return jwt;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default UserService;
