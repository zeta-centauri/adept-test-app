import { styled } from "styled-components";

const TableRoot = styled.table<{ $w?: string; $h?: string }>`
  width: ${({ $w }) => ($w ? $w : "auto")};
  min-width: 400px;
  height: ${({ $h }) => ($h ? $h : "auto")};
  padding: 24px;

  border-collapse: collapse;
  text-align: start;
`;

export default TableRoot;
