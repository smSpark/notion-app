import React from "react";
import {
  StatInfoBlockContent,
  StatInfoBlockTitle,
  StatInfoBlockWrapper,
} from "./StatInfoBlockStyle";

export interface StatInfoBlockProps {
  title: string;
  value: string;
}

const StatInfoBlock: React.FC<StatInfoBlockProps> = ({ title, value }) => {
  return (
    <StatInfoBlockWrapper>
      <StatInfoBlockTitle>{title}</StatInfoBlockTitle>
      <StatInfoBlockContent>{value}</StatInfoBlockContent>
    </StatInfoBlockWrapper>
  );
};

export { StatInfoBlock };
