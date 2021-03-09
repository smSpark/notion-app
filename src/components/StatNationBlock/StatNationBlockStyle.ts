import styled from "styled-components";

export const StatNationBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatNationTitle = styled.h4`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.mainBgDark};
  font-size: 1.3rem;
  font-weight: 400;
  font-family: inherit;
`;

export const StatNationList = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;
