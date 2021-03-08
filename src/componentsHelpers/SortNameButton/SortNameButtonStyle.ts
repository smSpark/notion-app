import styled from "styled-components";
import { ContactsSortType } from "../../redux/contacts/types";

interface SortButtonProps {
  sortType: ContactsSortType;
}

export const SortButton = styled.button<SortButtonProps>`
  position: relative;
  padding-right: 15px;
  background-color: inherit;
  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;
  border: none;
  transition: color 0.3s ease;
  cursor: pointer;

  :after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 2px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 4px 0 4px;
    border-color: ${({ theme, sortType }) =>
    (sortType === ContactsSortType.BY_NAME_ZA ? theme.colors.font : theme.colors.mainBgDark)}
      transparent transparent transparent;
  }

  :before {
    position: absolute;
    content: "";
    right: 0;
    top: 4px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 4px 4px 4px;
    border-color: transparent transparent ${({ theme, sortType }) =>
    (sortType === ContactsSortType.BY_NAME_AZ ? theme.colors.font : theme.colors.mainBgDark)} transparent;
  }

  :focus {
    outline: none;
  }

  :focus-visible {
    color: ${({ theme }) => theme.colors.links};
  }

  :hover {
    color: ${({ theme }) => theme.colors.links};
  }
`;
