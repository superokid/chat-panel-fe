import { AxiosResponse } from 'axios';
import { Response } from 'store/type';

export const GET_STAFFS_REQUEST = 'GET_STAFFS_REQUEST';
export const GET_STAFFS_SUCCESS = 'GET_STAFFS_SUCCESS';
export const GET_STAFF_REQUEST = 'GET_STAFF_REQUEST';
export const GET_STAFF_SUCCESS = 'GET_STAFF_SUCCESS';

export interface StaffsState {
  staffs: Staff[];
  staff: Staff | null;
}

export interface Staff {
  id: number;
  name: string;
  email: string;
  roles: string[];
}

interface GetStaffsResponse extends Response {
  data: Staff[];
}

interface GetStaffResponse extends Response {
  data: Staff;
}

export interface IGetStaffsAction {
  type: typeof GET_STAFFS_SUCCESS;
  payload: AxiosResponse<GetStaffsResponse>;
}

export interface IGetStaffAction {
  type: typeof GET_STAFF_SUCCESS;
  payload: AxiosResponse<GetStaffResponse>;
}
