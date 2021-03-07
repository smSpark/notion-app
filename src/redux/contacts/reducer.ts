import { CONTACTS_PER_PAGE } from "../../assets/js/constants";
import {
  ContactsSortType,
  ContactActionType,
  ContactsActions,
  ContactState,
  ContactsViewType,
} from "./types";

export const initialState: ContactState = {
  data: [],
  view: localStorage.getItem("view") as ContactsViewType || ContactsViewType.TABLE_VIEW,
  pageCapacity: CONTACTS_PER_PAGE,
  sortType: ContactsSortType.NOT_SORTED,
  currentPage: 1,
};

export const contactsReducer = (state = initialState, action: ContactsActions): ContactState => {
  switch (action.type) {
    case ContactActionType.CONTACTS_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case ContactActionType.SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ContactActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case ContactActionType.CHANGE_VIEW_TYPE:
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
};
