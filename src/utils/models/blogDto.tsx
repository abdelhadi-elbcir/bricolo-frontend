import { UserDto } from "./UserDto";

export interface BlogDto {
    title: string;
    body: string;
    image: string;
    userDto: UserDto;
  }
  