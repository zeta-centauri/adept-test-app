import { styled } from "styled-components";

const TableRow = styled.tr<{ $selected?: boolean }>`
  height: auto;
  td:not(:last-of-type),
  th:not(:last-of-type) {
    border-inline-end-width: 1px;
  }

  background-color: ${(props) => (props.$selected ? "#f4f4f5" : "white")};
`;

export default TableRow;
