import { IUserInfo } from "../../types/users";
import { ContactActionType, ContactsSortType, ContactsViewType } from "./types";

export const setContacts = (contacts: IUserInfo[]) =>
  ({
    type: ContactActionType.CONTACTS_FETCH_SUCCESS,
    payload: contacts,
  } as const);

export const fetchContacts = () =>
  ({
    type: ContactActionType.CONTACTS_FETCH,
  } as const);

export const setPage = (pageNumber: number) =>
  ({
    type: ContactActionType.SET_PAGE,
    payload: pageNumber,
  } as const);

export const changeSortType = (sortType: ContactsSortType) =>
  ({
    type: ContactActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  } as const);

export const changeViewType = (view: ContactsViewType) => {
  localStorage.setItem("view", view);

  return {
    type: ContactActionType.CHANGE_VIEW_TYPE,
    payload: view,
  } as const;
};
