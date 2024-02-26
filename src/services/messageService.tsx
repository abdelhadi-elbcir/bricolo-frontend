import { MessageDto } from '../utils/models/messageDto';
import axios from 'axios';


const API_BASE_URL = 'your_api_base_url'; // Replace with your actual API base URL

export const getAllMessages = async (): Promise<MessageDto[]> => {
  const response = await axios.get<MessageDto[]>(`${API_BASE_URL}/msg`);
  return response.data;
};

export const getMessageById = async (id: string): Promise<MessageDto | null> => {
  try {
    const response = await axios.get<MessageDto>(`${API_BASE_URL}/msg/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMessage = async (messageData: MessageDto): Promise<MessageDto> => {
  const response = await axios.post<MessageDto>(`${API_BASE_URL}/msg`, messageData);
  return response.data;
};

export const updateMessage = async (id: string, messageData: MessageDto): Promise<MessageDto> => {
  const response = await axios.put<MessageDto>(`${API_BASE_URL}/msg/${id}`, messageData);
  return response.data;
};

export const deleteMessage = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/msg/${id}`);
};


