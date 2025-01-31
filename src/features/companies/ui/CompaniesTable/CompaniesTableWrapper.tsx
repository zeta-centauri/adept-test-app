import { PropsWithChildren } from "react";
import { Table } from "../../../../common/components/Table";
import styled from "styled-components";

interface Props {
  isSelectAll: boolean;
  handleSelectAll: () => void;
}
const TableWrapper = ({
  isSelectAll,
  handleSelectAll,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Wrapper>
      <Table.Root $w="100%">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>
              <input
                type="checkbox"
                checked={isSelectAll}
                onChange={handleSelectAll}
              />
            </Table.ColumnHeader>
            <Table.ColumnHeader>Название компании</Table.ColumnHeader>
            <Table.ColumnHeader>Адрес</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>{children}</Table.Body>
      </Table.Root>
    </Wrapper>
  );
};

export default TableWrapper;

const Wrapper = styled.div`
  height: 70%;
  width: 100%;
  overflow-y: auto;
  overflow-y: auto;
`;
