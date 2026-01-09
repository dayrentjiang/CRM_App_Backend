import { User } from "../generated/prisma/client";
import { prisma } from "../lib/prisma";

class UserRepository {
  async create() {}

  async get(userId: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  }

  async getAll(): Promise<User[]> {
    const users = prisma.user.findMany();
    return users;
  }

  async delete() {}

  async update() {}
}

export default UserRepository;
