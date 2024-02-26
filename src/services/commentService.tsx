import axios from 'axios';
import { CommentDto } from '../utils/models/commentDto';



const API_BASE_URL = process.env.api_url; // Replace with your actual API base URL

export const getAllComments = async (): Promise<CommentDto[]> => {
  const response = await axios.get(`${API_BASE_URL}/comments`);
  return response.data;
};

export const getCommentById = async (id: string): Promise<CommentDto | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/comments/${id}`);
    return response.data;
  } catch (error:any) {
    if (error.response && error.response.status === 404) {
      return null; // Comment not found
    }
    throw error;
  }
};

export const createComment = async (commentData: CommentDto): Promise<CommentDto> => {
  const response = await axios.post(`${API_BASE_URL}/comments`, commentData);
  return response.data;
};

export const updateComment = async (id: string, commentData: CommentDto): Promise<CommentDto> => {
  const response = await axios.put(`${API_BASE_URL}/comments/${id}`, commentData);
  return response.data;
};

export const deleteComment = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/comments/${id}`);
};
