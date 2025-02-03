import { Table } from "../../../../common/components/Table";

interface Props {
  isSelectAll: boolean;
  handleSelectAll: () => void;
}

const CompaniesTableHeader = ({ isSelectAll, handleSelectAll }: Props) => {
  return (
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
  );
};

export default CompaniesTableHeader;
