import { UserDto } from "./UserDto";

export interface MessageDto {
    id: string;
    text: string;
    userDto: UserDto;
  }