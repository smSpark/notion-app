import styled from "styled-components";
import { ContainerStyle } from "../../assets/styles/CommonStyles";
import { device } from "../../assets/styles/media";

export const TableWrapper = styled(ContainerStyle)`
  margin: 10px 0;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  background-color: ${({ theme }) => theme.colors.secondBg};
  text-align: left;
  font-size: 1.2rem;

  @media ${device.laptop} {
    font-size: 1.1rem;
  }
`;

export const TableHead = styled.thead`
  font-size: 1.3rem;
`;

export const TableHeadRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.mainBg};
  font-weight: 600;
  height: 30px;
`;

export const TableBodyRow = styled.tr`
  height: 80px;
`;

interface TableCellProps {
  width?: string;
  addaptiveHide?: boolean;
}

export const TableCell = styled.th<TableCellProps>`
  font-weight: inherit;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-overflow: ellipsis;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainBg};
  width: ${(props) => props.width || "16%"};
  padding: 0.7rem;
  white-space: pre-wrap;
  text-align: ${(props) => props.align || "left"};

  @media ${device.tablet} {
    padding: 0.3rem;
    ${({ addaptiveHide }) => (addaptiveHide ? "display: none" : "")}
  }
`;

export const UserNation = styled.p<{ color?: string; inverted?: boolean }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border: 1px solid ${(props) => props.color || "#cc416f"};
  border-radius: 3px;
  font-weight: 600;
  color: ${(props) => {
    if (props.inverted) {
      return "#ffffff";
    }
    return props.color || "#cc415f";
  }};
  background-color: ${(props) => {
    if (props.inverted) {
      return props.color || "#cc415f";
    }

    return props.color ? `${props.color}1A` : "#cc416f1A";
  }};
`;

export const UserAvatar = styled.img`
  width: 3.5rem;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
`;
