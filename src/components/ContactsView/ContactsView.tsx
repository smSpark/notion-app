import React from "react";
import { useSelector } from "react-redux";
import { getContactParts } from "../../redux/contacts/selectors";
import { ContactsViewType } from "../../redux/contacts/types";
import { RootState } from "../../types/redux";
import { Table } from "../Table/Table";
import { TilesList } from "../TilesList/TilesList";
import { SideWindows } from "../../pages/SideWindows/SideWindows";


const ContactsView: React.FC = () => {
   const contacts = useSelector(getContactParts);
   const viewType = useSelector((store: RootState) => store.contacts.view);

  if (viewType === ContactsViewType.TABLE_VIEW) {
    return <>
    <SideWindows />
    <Table data={contacts} />;
    </>
  }

  if (viewType === ContactsViewType.TILE_VIEW) {
    return <TilesList data={contacts} />;
  }

  return null;

};

export { ContactsView };
