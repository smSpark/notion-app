import styled from "styled-components";
import { ContainerStyle } from "../../assets/styles/CommonStyles";
import { device } from "../../assets/styles/media";

export const TileListContainer = styled(ContainerStyle)`
  margin: 10px 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.laptopL} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`;
