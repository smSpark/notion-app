import styled from "styled-components";
import { device } from "./media";

export const ContainerStyle = styled.div`
  width: 100%;
  padding: 2rem;
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);

  @media ${device.laptop} {
    padding: 1rem;
  }

  @media ${device.mobileL} {
    padding: 0.5rem;
  }
`;
