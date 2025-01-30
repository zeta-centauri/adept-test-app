import { PropsWithChildren } from "react";
import { Table } from "../../../common/components/Table/Table";

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
    <Table.Root>
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
  );
};

export default TableWrapper;
