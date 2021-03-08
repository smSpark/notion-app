import { InferValueTypes } from "../../types/redux";
import * as actions from "./action";

export interface AppState {
  isLoading: boolean,
  errors: string,
}

export enum AppActionType {
  SET_ERROR = "app/SET_ERROR",
  CLEAR_ERROR = "app/CLEAR_ERROR",
  LOADING_START = "app/LOADING_START",
  LOADING_FINISHED = "app/LOADING_FINISHED",
}

export type AppActions = ReturnType<InferValueTypes<typeof actions>>;
