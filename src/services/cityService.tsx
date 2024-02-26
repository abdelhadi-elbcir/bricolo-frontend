import axios from "axios";
import { CityDto } from "../utils/models/cityDto";

const API_BASE_URL = process.env.api_url; // Replace with your actual API base URL

export const getAllCities = async (): Promise<CityDto[]> => {
    const response = await axios.get(`${API_BASE_URL}/cities`);
    return response.data;
};

export const getCityById = async (id: number): Promise<CityDto | null> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/cities/${id}`);
        return response.data;
    } catch (error:any) {
        if (error.response && error.response.status === 404) {
            return null; // City not found
        }
        throw error;
    }
};

export const createCity = async (cityData: CityDto): Promise<CityDto> => {
    const response = await axios.post(`${API_BASE_URL}/cities`, cityData);
    return response.data;
};

export const updateCity = async (id: number, cityData: CityDto): Promise<CityDto> => {
    const response = await axios.put(`${API_BASE_URL}/cities/${id}`, cityData);
    return response.data;
};

export const deleteCity = async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/cities/${id}`);
};
