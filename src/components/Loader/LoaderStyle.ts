import styled from "styled-components";
import { opacityInAnim } from "../../assets/styles/CommonAnimation";

export const LoaderWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${opacityInAnim} 0.2s ease;
`;
