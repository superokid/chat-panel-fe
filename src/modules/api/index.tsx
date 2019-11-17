import axios from '../axios';
import { IPostStaff } from 'store/staffs/type';

export const getStaffsApi = () => axios.get(`/v1/staffs`);
export const getStaffApi = (id: number) => axios.get(`/v1/staff/${id}`);
export const postStaffApi = (data: IPostStaff) => axios.post(`/v1/staff`, data);
