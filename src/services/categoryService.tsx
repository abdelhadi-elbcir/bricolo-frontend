import axios from "axios";
import { CategoryDto } from "../utils/models/categoryDto";


const API_BASE_URL = process.env.api_url; // Replace with your actual API base URL

export const getAllCategories = async (): Promise<CategoryDto[]> => {
  const response = await axios.get(`${API_BASE_URL}/categories`);
  return response.data;
};

export const getCategoryById = async (id: number): Promise<CategoryDto | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories/${id}`);
    return response.data;
  } catch (error:any) {
    if (error.response && error.response.status === 404) {
      return null; // Category not found
    }
    throw error;
  }
};

export const createCategory = async (categoryData: CategoryDto): Promise<CategoryDto> => {
  const response = await axios.post(`${API_BASE_URL}/categories`, categoryData);
  return response.data;
};

export const updateCategory = async (id: number, categoryData: CategoryDto): Promise<CategoryDto> => {
  const response = await axios.put(`${API_BASE_URL}/categories/${id}`, categoryData);
  return response.data;
};

export const deleteCategory = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/categories/${id}`);
};
