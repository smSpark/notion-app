import React from "react";
import { NationCountBlock } from "../../componentsHelpers/NationCountBlock/NationCountBlock";
import { StatNationBlockWrapper, StatNationList, StatNationTitle } from "./StatNationBlockStyle";

export interface StatNationBlockProps {
  data: { [key: string] : number },
}

const StatNationBlock: React.FC<StatNationBlockProps> = ({ data }) => {
  return (
    <StatNationBlockWrapper>
      <StatNationTitle>Nationalities</StatNationTitle>
      <StatNationList>
        {Object.keys(data).map((national) => (
          <NationCountBlock key={national} nation={national} count={`${data[national]}`} />
        ))}
      </StatNationList>
    </StatNationBlockWrapper>
  );
};

export { StatNationBlock };
