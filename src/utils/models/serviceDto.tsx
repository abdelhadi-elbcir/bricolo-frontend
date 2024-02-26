import { CityDto } from "./cityDto";
import { UserDto } from "./UserDto";
import { CategoryDto } from "./categoryDto";

export interface ServiceDto {
    title: string;
    price: number;
    description: string;
    image: string;
    phone: string;
    cityDto: CityDto;
    categoryDto: CategoryDto;
    userDto: UserDto;
}