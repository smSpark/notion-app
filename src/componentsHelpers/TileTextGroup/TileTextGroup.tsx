import React from "react";
import { TextGroupTitle, TextGroupWrapper } from "./TileTextGroupStyle";

export interface TileTextGroupProps {
  title: string;
}

const TileTextGroup: React.FC<TileTextGroupProps> = ({ title, children }) => {
  return (
    <TextGroupWrapper>
      <TextGroupTitle>{`${title}\u00A0:`}</TextGroupTitle>
      {children}
    </TextGroupWrapper>
  );
};

export { TileTextGroup };
