import { UserDto } from "./UserDto";

export interface CommentDto {
    text: string;
    userDto: UserDto;
  }