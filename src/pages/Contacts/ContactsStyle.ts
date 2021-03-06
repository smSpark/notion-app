import styled from "styled-components";
import { device } from "../../assets/styles/media";

export const Container = styled.div`
  padding: 0 2rem;

  @media ${device.laptop} {
    padding: 0 1rem;
  }

  @media ${device.mobileL} {
    padding: 0 0.5rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 0;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;