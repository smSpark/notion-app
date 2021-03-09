import React, { ChangeEvent } from "react";
import { OptionContainer, Select } from "./OptionSelectStyle";

export interface OptionSelectProps {
  onChange: (evt: ChangeEvent<HTMLSelectElement>) => void,
  value: string,
  name: string,
}

const OptionSelect: React.FC<OptionSelectProps> = ({ onChange, name, value }) => {
  return (
    <OptionContainer>
      <Select onChange={onChange} value={value} name={name}>
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
    </OptionContainer>
  );
};

export { OptionSelect };
