import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader/Loader";
import { RootState } from "../../types/redux";
import { SideWindowsWrapper } from "./SideWindowsStyle";

const SideWindows: React.FC = () => {
  // TODO: Можно сделать всплывашку с ошибками
  const isLoading = useSelector((state: RootState) => state.app.isLoading);

  if (isLoading) {
    return (
      <SideWindowsWrapper>
        <Loader />
      </SideWindowsWrapper>
    );
  }

  return null;
};

export { SideWindows };
