import { AppActions, AppActionType, AppState } from "./types";

const initialState: AppState = {
  isLoading: false,
  errors: "",
};

export const appReducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case AppActionType.CLEAR_ERROR:
      return {
        ...state,
        errors: "",
      };
    case AppActionType.SET_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case AppActionType.LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case AppActionType.LOADING_FINISHED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
