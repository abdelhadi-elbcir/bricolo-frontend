import axios from "axios";
import { BlogDto } from "../utils/models/blogDto";

const API_BASE_URL = process.env.api_url; 
export const getAllBlogs = async (): Promise<BlogDto[]> => {
  const response = await axios.get(`${API_BASE_URL}/blogs`);
  return response.data;
};

export const getBlogById = async (id: string): Promise<BlogDto | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blogs/${id}`);
    return response.data;
  } catch (error:any) {
    if (error.response && error.response.status === 404) {
      return null; 
    }
    throw error;
  }
};

export const createBlog = async (blogData: BlogDto): Promise<BlogDto> => {
  const response = await axios.post(`${API_BASE_URL}/blogs`, blogData);
  return response.data;
};

export const updateBlog = async (id: string, blogData: BlogDto): Promise<BlogDto> => {
  const response = await axios.put(`${API_BASE_URL}/blogs/${id}`, blogData);
  return response.data;
};

export const deleteBlog = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/blogs/${id}`);
};
