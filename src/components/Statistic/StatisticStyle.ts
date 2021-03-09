import styled from "styled-components";
import { ContainerStyle } from "../../assets/styles/CommonStyles";

export const StatisticWrapper = styled(ContainerStyle)`
  display: flex;
  flex-direction: column;
`;

export const StatisticTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const StatInfoList = styled.div`
  display: flex;
`;

export const StatGenderInfoWrapper = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 20px;
`;

export const PredominateGender = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #FFE58F;
  font-weight: 700;
  font-size: 1.1rem;
  white-space: nowrap;
`;
