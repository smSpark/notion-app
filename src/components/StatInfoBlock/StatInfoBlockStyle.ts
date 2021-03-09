import styled from "styled-components";

export const StatInfoBlockWrapper = styled.div`
  margin-right: 1.5rem;
`;

export const StatInfoBlockTitle = styled.h4`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.mainBgDark};
  font-size: 1.3rem;
  font-weight: 400;
  font-family: inherit;
`;

export const StatInfoBlockContent = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
  padding: 0.5rem 0;
  color: inherit;
`;
