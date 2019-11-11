import axios from '../axios';

export const getStaffsApi = () => axios.get(`/v1/staffs`);
export const getStaffApi = (id: number) => axios.get(`/v1/staff/${id}`);
