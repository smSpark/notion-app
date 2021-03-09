import styled from "styled-components";

export const RadioInput = styled.input`
  position: absolute;
  appearance: none;
`;

export const RadioLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  padding: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  & > svg {
    fill: ${({ theme }) => theme.colors.font};
    transition: fill 0.3s ease;
  }

  ${RadioInput}:checked + & {
    background-color: ${({ theme }) => theme.colors.links};
  }

  ${RadioInput}:checked + & > svg {
    fill: white;
  }
`;

export const RadioContainer = styled.div`
  width: 31px;
  height: 31px;
`;
