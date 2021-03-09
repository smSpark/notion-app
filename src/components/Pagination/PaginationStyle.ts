import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  margin: 3rem 0;
  align-self: flex-end;
`;

export const PaginationButton = styled.button<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border-radius: 3px;
  border: ${({ active, theme }) => (active ? `1px solid ${theme.colors.links}` : "none")};
  color: ${({ active, theme }) => (active ? `${theme.colors.links}` : "inherit")};
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.3rem;

  :disabled {
    opacity: 0.3;
  }
`;
