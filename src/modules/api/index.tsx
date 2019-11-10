import axios from '../axios';

export const getStaffApi = (id: number) => axios.get(`/staff/${id}`);
