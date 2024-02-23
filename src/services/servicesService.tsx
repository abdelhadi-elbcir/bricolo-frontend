import axios from "axios";

import { CategoryDto } from './categoryService';
import { CityDto } from './cityService';
import { UserDto } from './userService';


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

const API_BASE_URL = 'your_api_base_url'; // Replace with your actual API base URL

export const getAllServices = async (): Promise<ServiceDto[]> => {
    const response = await axios.get(`${API_BASE_URL}/services`);
    return response.data;
};

export const getServiceById = async (id: string): Promise<ServiceDto | null> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/services/${id}`);
        return response.data;
    } catch (error:any) {
        if (error.response && error.response.status === 404) {
            return null; // Service not found
        }
        throw error;
    }
};

export const createService = async (serviceData: ServiceDto): Promise<ServiceDto> => {
    const response = await axios.post(`${API_BASE_URL}/services`, serviceData);
    return response.data;
};

export const updateService = async (id: string, serviceData: ServiceDto): Promise<ServiceDto> => {
    const response = await axios.put(`${API_BASE_URL}/services/${id}`, serviceData);
    return response.data;
};

export const deleteService = async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/services/${id}`);
};