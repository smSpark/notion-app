import { InferValueTypes } from "../../types/redux";
import * as actions from "./action";

export enum ContactFilterActionType {
  CHANGE_VALUE = "contactFilter/CHANGE_VALUE",
  RESET_VALUE = "contactFilter/RESET_VALUE",
}

export interface ContactFilterState {
  readonly name: string,
  readonly gender: string,
  readonly nat: string,
}

export type PossibleFilterName = keyof ContactFilterState;

export type ContactFilterActions = ReturnType<InferValueTypes<typeof actions>>;
