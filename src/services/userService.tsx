// UserService.ts
import axios from 'axios';
// UserDto.ts
export interface UserDto {
    phone: string;
    address: string;
    about: string;
    linkedin: string;
    instagram: string;
    youtube: string;
    facebook: string;
    image: string;
    firstname: string;
    lastname: string;
  }
  

const API_BASE_URL = process.env.api_url; // Replace with your actual API base URL

export const getAllUsers = async (): Promise<UserDto[]> => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const getUserById = async (id: string): Promise<UserDto | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error:any) {
    if (error.response && error.response.status === 404) {
      return null; // User not found
    }
    throw error;
  }
};

export const createUser = async (userData: UserDto): Promise<UserDto> => {
  const response = await axios.post(`${API_BASE_URL}/users`, userData);
  return response.data;
};

export const updateUser = async (id: string, userData: UserDto): Promise<UserDto> => {
  const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/users/${id}`);
};
