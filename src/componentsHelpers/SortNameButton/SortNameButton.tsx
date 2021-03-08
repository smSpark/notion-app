import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortType } from "../../redux/contacts/action";
import { ContactsSortType } from "../../redux/contacts/types";
import { RootState } from "../../types/redux";
import { SortButton } from "./SortNameButtonStyle";

const SortNameButton: React.FC = ({ children }) => {
  const sortType = useSelector((state: RootState) => state.contacts.sortType);
  const dispatch = useDispatch();

  const onClickHandler = useCallback(() => {
    switch (sortType) {
      case ContactsSortType.BY_NAME_AZ:
        dispatch(changeSortType(ContactsSortType.BY_NAME_ZA));
        break;
      case ContactsSortType.NOT_SORTED:
        dispatch(changeSortType(ContactsSortType.BY_NAME_AZ));
        break;
      default:
        dispatch(changeSortType(ContactsSortType.NOT_SORTED));
    }
  }, [sortType, dispatch]);

  return <SortButton onClick={onClickHandler} sortType={sortType}>{children}</SortButton>;
};

export { SortNameButton };
