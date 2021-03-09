import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RadioButton } from "../RadioButton/RadioButton";
import { ReactComponent as ListImg } from "../../assets/images/list.svg";
import { ReactComponent as BlocksImg } from "../../assets/images/blocks.svg";
import { RadioBlockWrapper } from "./RadioBlockStyle";
import { RootState } from "../../types/redux";
import { ContactsViewType } from "../../redux/contacts/types";
import { changeViewType } from "../../redux/contacts/action";

const buttons = [
  {
    id: "blocks-radio-btn",
    img: <BlocksImg />,
    value: ContactsViewType.TILE_VIEW,
    name: "tile-view",
    // checked: false,
  },
  {
    id: "list-radio-btn",
    img: <ListImg />,
    value: ContactsViewType.TABLE_VIEW,
    name: "table-view",
    // checked: true,
  },
];

const RadioBlock: React.FC = () => {
  const viewType = useSelector((store: RootState) => store.contacts.view);
  const dispatch = useDispatch();

  const changeViewHandler = (viewType: ContactsViewType) => {
    dispatch(changeViewType(viewType));
  };

  return (
    <RadioBlockWrapper defaultValue="table">
      {buttons.map(({ id, img, value, name }) => (
        <RadioButton
          key={id}
          id={id}
          value={value}
          name={name}
          onChange={changeViewHandler}
          checked={value === viewType}
        >
          {img}
        </RadioButton>
      ))}
    </RadioBlockWrapper>
  );
};

export { RadioBlock };
