import styled from "styled-components";
import { ContainerStyle } from "../../assets/styles/CommonStyles";
import { device } from "../../assets/styles/media";

export const FilterWrapper = styled(ContainerStyle)`
  display: flex;
  justify-content: space-between;
`;

export const ClearButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.mainBgDark};
  padding: 3px 2px 3px 20px;
  font-weight: 600;
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    left: 0;
    top: 49%;
    transform: rotate(45deg);
    width: 14px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.mainBgDark};
  }

  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 49%;
    transform: rotate(-45deg);
    width: 14px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.mainBgDark};
  }

  @media ${device.mobileL} {
    padding: 40px 10px 3px 10px;

    :after {
      top: 40%;
      left: 8px;
      width: 5rem;
    }

    :before {
      top: 40%;
      left: 8px;
      width: 5rem;
    }
  }
`;

export const FilterForm = styled.form`
  display: flex;
  width: 100%;

  & > div {
    display: flex;
    margin-right: 20px;
    height: 4rem;
  }

  @media ${device.tablet} {
    margin: -0.5rem;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const FilterInput = styled.input`
  padding: 0 1rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.mainBgDark};
  font-family: inherit;

  &:first-child {
    border-radius: 3px 0 0 3px;
    border-right: none;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
    border-left: none;
  }

  &:only-child {
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.mainBgDark};
  }

  
`;

export const FilterSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.mainBgDark};
  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }

  & > svg {
    width: 60%;
    height: 60%;
  }
`;

export const InputWrapper = styled.div<{ width: string }>`
  width: ${({ width }) => width || "auto"};

  @media ${device.tablet} {
    width: 60%;
    margin: 0.5rem;
  }

  @media ${device.mobileL} {
    width: 100%;
  }

`;
