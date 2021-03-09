import styled from "styled-components";

export const SettingPanelWrapper = styled.div`
  display: flex;
  height: 31px;
  align-items: center;
`;

export const ReloadButton = styled.button`
  margin: 0px 10px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px dashed ${({ theme }) => theme.colors.mainBgDark};
  width: 30px;
  height: 30px;
  padding: 6px;
  cursor: pointer;

  & > svg {
    fill: ${({ theme }) => theme.colors.font};
  }
`;
