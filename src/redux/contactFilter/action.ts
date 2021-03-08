import { ContactFilterActionType, ContactFilterState } from "./types";

export const changeFilterValue = (value: ContactFilterState) => ({
  type: ContactFilterActionType.CHANGE_VALUE,
  payload: value,
} as const);

export const resetFilter = () => ({
  type: ContactFilterActionType.RESET_VALUE,
} as const);
