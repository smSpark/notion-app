import styled from "styled-components";
import { device } from "../../assets/styles/media";

export const Select = styled.select`
  appearance: none;
  position: absolute;
  border: none;
  outline: none;
  box-shadow: none;
  font-family: inherit;
  color: inherit;
  padding: 0 1rem;
  flex: 1;
  width: 100%;
  line-height: 4rem;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:focus {
    box-shadow: 0px -1px 5px 1px ${({ theme }) => theme.colors.links} inset;
  }
`;

export const OptionContainer = styled.div`
  position: relative;
  display: flex;
  min-width: 10rem;
  flex-grow: 1;
  border: 1px solid ${({ theme }) => theme.colors.mainBgDark};
  border-radius: 3px;
  overflow: hidden;
  height: 100%;
  cursor: pointer;

  &:after {
    position: absolute;
    cursor: pointer;
    content: "";
    top: 50%;
    right: 10px;
    width: 10px;
    height: 10px;
    pointer-events: none;
    transition: border 0.3s ease;
    border-top: 2px solid ${({ theme }) => theme.colors.mainBgDark};
    border-right: 2px solid ${({ theme }) => theme.colors.mainBgDark};
    transform: rotate(135deg) translate(-50%, 50%);
  }

  &:hover:after {
    border-top: 2px solid ${({ theme }) => theme.colors.links};
    border-right: 2px solid ${({ theme }) => theme.colors.links};
  }

  @media ${device.tablet} {
    margin: 0.5rem;
  }
`;
