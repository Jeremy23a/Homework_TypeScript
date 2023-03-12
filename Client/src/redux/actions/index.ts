import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import axios from "axios";

const url = "https://localhost:3001/user";

export interface User {
  id: number;
  name: string;
  lastName: string;
}

export interface FetchUsersAction {
  type: ActionTypes.FETCH_USERS;
  payload: User[];
}

export type UserAction = FetchUsersAction;

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await axios.get<User[]>(url);
    dispatch<FetchUsersAction>({
      type: ActionTypes.FETCH_USERS,
      payload: response.data,
    });
  };
};
