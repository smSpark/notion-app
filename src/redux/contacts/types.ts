import { InferValueTypes } from "../../types/redux";
import { IUserInfo } from "../../types/users";
import * as actions from "./action";

export enum ContactActionType {
  CONTACTS_FETCH = "contacts/CONTACTS_FETCH",
  CONTACTS_FETCH_SUCCESS = "contacts/CONTACTS_FETCH_SUCCESS",
  CONTACTS_FETCH_ERROR = "contacts/CONTACTS_FETCH_ERROR",
  SET_PAGE = "contacts/SET_PAGE",
  CHANGE_SORT_TYPE = "contacts/CHANGE_SORT_TYPE",
  CHANGE_VIEW_TYPE = "contacts/CHANGE_VIEW_TYPE"
}

export enum ContactsSortType {
  BY_NAME_AZ = "BY_NAME_AZ",
  BY_NAME_ZA = "BY_NAME_ZA",
  NOT_SORTED = "NOT_SORTED",
}

export enum ContactsViewType {
  TABLE_VIEW = "TABLE_VIEW",
  TILE_VIEW = "TILE_VIEW",
}

export interface ContactState {
  readonly data: IUserInfo[],
  readonly view: ContactsViewType;
  readonly pageCapacity: number;
  readonly sortType: ContactsSortType;
  readonly currentPage: number;
}

export type ContactsActions = ReturnType<InferValueTypes<typeof actions>>;
