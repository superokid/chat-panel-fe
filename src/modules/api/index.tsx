import axios from '../axios';
import { PostAssignStaffParam } from 'store/feature/type';
import { IPostStaff } from 'store/staffs/type';
import { LoginParam } from 'store/auth/type';

export const getStaffsApi = () => axios.get(`/v1/staffs`);
export const getStaffApi = (id: number) => axios.get(`/v1/staff/${id}`);
export const postStaffApi = (data: IPostStaff) => axios.post(`/v1/staff`, data);

// auth
export const loginApi = (body: LoginParam) => axios.post(`/v1/login`, body);

// chat
export const getConversationStaffApi = () => axios.get(`/v1/conversation-staff`);
export const getMessagesApi = (id: number) => axios.get(`/v1/messages/${id}`);
export const postMessageApi = (body: { conversationId: number; message: string }) =>
  axios.post(`/v1/messages`, body);

// modal feature
export const postAssignStaffApi = (body: PostAssignStaffParam) =>
  axios.post(`/v1/conversation-staff/assign`, body);
