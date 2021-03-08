import { AppActionType } from "./types";

export const startLoading = () => ({
  type: AppActionType.LOADING_START,
} as const);

export const endLoading = () => ({
  type: AppActionType.LOADING_FINISHED,
} as const);

export const setErrors = (error: string) => ({
  type: AppActionType.SET_ERROR,
  payload: error,
} as const);

export const clearError = () => ({
  type: AppActionType.CLEAR_ERROR,
} as const);
