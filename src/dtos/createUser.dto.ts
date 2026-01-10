import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export default class CreateUserDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(3, 50)
  @IsString()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  constructor(email: string, password: string, name: string) {
    this.email = email;
    this.name = name;
    this.password = password;
  }
}
