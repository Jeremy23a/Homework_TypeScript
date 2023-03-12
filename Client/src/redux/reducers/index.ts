import { combineReducers } from "redux";
import { usersReducer } from "./user";
import { User } from "../actions";

export interface StoreState {
  users: User[];
}

export const reducers = combineReducers<StoreState>({
  users: usersReducer,
});
