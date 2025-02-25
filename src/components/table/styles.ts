import styled from "styled-components";
import { colors, fonts } from "../../styles";

export const TableContainer = styled.div`
  width: 100%;
  padding: 0 32px;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 8px 8px 0 0;

  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }
`


export const TableHeader = styled.thead`
  background-color: ${colors.primary};
  color: white;
  font-family: ${fonts.primary};
  justify-content: space-between;

  th {
    padding: 12px 16px;
    text-align: center;
  }

  button {
    display: none;
  }

  @media (max-width: 767px) {
    th:nth-child(3),
    th:nth-child(4),
    th:nth-child(5) {
      display: none;
    }

    display: none;

    th {
      text-align: left;
      justify-content: space-between;
    }
  }
`;

export const TableHeaderMobile = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    background-color: ${colors.primary};
    color: white;
    padding: 12px 16px;
    border-radius: 8px 8px 0 0;
    font-family: ${fonts.primary};
    font-weight: bold;

    img {
      width: 16px;
      height: 16px;
      margin-left: auto;
      margin-right: 4px
    }
  }
`;


export const TableRow = styled.tr`
  background-color: white;
  border-bottom: 2px solid ${colors.gray10};
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  font-family: ${fonts.primary};
  color: ${colors.black};

  td {
    padding: 8px 12px;
    vertical-align: middle;
  }

  @media (min-width: 769px) {
    display: table-row;
  }

  @media (max-width: 767px) {
    display: block;
    width: 100%;
    margin-bottom: 16px;
    text-align: left;

    td:nth-child(3),
    td:nth-child(4),
    td:nth-child(5) {
      display: none;
    }

    button {
      display: inline-block;
    }

    &.expanded td:nth-child(3),
    &.expanded td:nth-child(4),
    &.expanded td:nth-child(5) {
      display: block;
      width: 100%;
      padding: 8px 0;
      border-top: 1px solid ${colors.gray10};
    }
  }
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const ExpandedRow = styled.tr`
  td {
    padding: 12px 16px;
    background-color: #${colors.gray05};
    border-bottom: 1px solid #ddd;
  }
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  img {
  object-fit: contain;
  }

  @media (max-width: 767px) {
    display: block;
    margin-left: auto;
  }
`;
