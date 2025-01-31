import styled from "styled-components";

const TableRoot = styled.table<{ $w?: string; $h?: string }>`
  width: ${({ $w }) => ($w ? $w : "auto")};
  min-width: 400px;
  height: ${({ $h }) => ($h ? $h : "auto")};
  padding: 24px;

  border-collapse: collapse;
  text-align: start;
`;
const TableHeader = styled.thead`
  text-align: start;
  padding: 0.5rem;

  border-width: 0px;
  border-style: solid;
  border-color: #e4e4e7;
  border-bottom: 1px solid #e4e4e7;
`;

const TableColumnHeader = styled.th`
  text-align: start;
  padding: 0.5rem;

  border-width: 0px;
  border-style: solid;
  border-color: #e4e4e7;
  border-bottom: 1px solid #e4e4e7;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr<{ $selected?: boolean }>`
  height: auto;
  td:not(:last-of-type),
  th:not(:last-of-type) {
    border-inline-end-width: 1px;
  }

  background-color: ${(props) => (props.$selected ? "#f4f4f5" : "white")};
`;

const TableCell = styled.td`
  height: auto;
  padding: 0.5rem;
  border-width: 0px;
  border-style: solid;
  border-color: #e4e4e7;
  border-bottom: 1px solid #e4e4e7;
`;

export const Table = {
  Root: TableRoot,
  Header: TableHeader,
  ColumnHeader: TableColumnHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
};
