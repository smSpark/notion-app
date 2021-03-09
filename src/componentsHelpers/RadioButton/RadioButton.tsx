import React from "react";
import { ContactsViewType } from "../../redux/contacts/types";
import { RadioInput, RadioContainer, RadioLabel } from "./RadioButtonStyle";

export interface RadioButtonProps {
  id: string;
  value: ContactsViewType;
  name: string;
  checked: boolean;
  onChange: (viewType: ContactsViewType) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  id,
  value,
  name,
  checked,
  onChange,
}) => {
  const changeView = () => {
    onChange(value);
  };

  return (
    <RadioContainer>
      <RadioInput
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={changeView}
        checked={checked}
      />
      <RadioLabel htmlFor={id}>{children}</RadioLabel>
    </RadioContainer>
  );
};

export { RadioButton };
