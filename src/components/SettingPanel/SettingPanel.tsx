import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { RadioBlock } from "../../componentsHelpers/RadioBlock/RadioBlock";
import { ReloadButton, SettingPanelWrapper } from "./SettingPanelStyle";
import { ReactComponent as RefreshImg } from "../../assets/images/refresh.svg";
import { fetchContacts } from "../../redux/contacts/action";

const SettingPanel: React.FC = () => {
  const dispatch = useDispatch();

  const reloadContacts = useCallback(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <SettingPanelWrapper>
      <ReloadButton onClick={reloadContacts} type="button">
        <RefreshImg />
      </ReloadButton>
      <RadioBlock />
    </SettingPanelWrapper>
  );
};

export { SettingPanel };
