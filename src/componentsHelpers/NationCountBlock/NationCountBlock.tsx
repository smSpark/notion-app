import React from "react";
import { NationCountContent, NationCountTitle } from "./NationCountBlockStyle";

export interface NationCountBlockProps {
  nation: string;
  count: string;
}

const NationCountBlock: React.FC<NationCountBlockProps> = ({ nation, count }) => {
  return (
    <NationCountContent>
      <NationCountTitle>{`${nation}:`}</NationCountTitle>
      {`${count} contact`}
    </NationCountContent>
  );
};

export { NationCountBlock };
