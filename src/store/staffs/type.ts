export const GET_STAFF_REQUEST = 'GET_STAFF_REQUEST';
export const GET_STAFF_SUCCESS = 'GET_STAFF_SUCCESS';

export interface Staff {
  id: number;
  name: string;
  email: string;
  roles: string[];
}

export interface IGetStaffAction {
  type: typeof GET_STAFF_SUCCESS;
  payload: Staff;
}
