import { AxiosResponse } from 'axios';

export const POST_ASSIGN_STAFF_SUCCESS = 'POST_ASSIGN_STAFF_SUCCESS';

export interface PostAssignStaffAction {
  type: typeof POST_ASSIGN_STAFF_SUCCESS;
  payload: AxiosResponse;
}

export interface PostAssignStaffParam {
  staffId: number;
  conversationId: number;
}

export type Action = PostAssignStaffAction;
