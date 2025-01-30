import { Company, UpdateCompanyPayload } from "../model/types";
import { Table } from "../../../common/components/Table/Table";

interface Props {
  company: Company;
  handleSelect: (id: number) => void;
  handleEdit: ({ id, updatedField, value }: UpdateCompanyPayload) => void;
}

const TableRow = ({ company, handleSelect, handleEdit }: Props) => {
  return (
    <Table.Row $selected={company.isSelected}>
      <Table.Cell>
        <input
          type="checkbox"
          checked={company.isSelected}
          onChange={() => handleSelect(company.id)}
        />
      </Table.Cell>
      <Table.Cell
        contentEditable
        onBlur={(e) =>
          handleEdit({
            id: company.id,
            updatedField: "name",
            value: e.currentTarget.textContent || "",
          } as UpdateCompanyPayload)
        }
      >
        {company.name}
      </Table.Cell>
      <Table.Cell
        contentEditable
        onBlur={(e) =>
          handleEdit({
            id: company.id,
            updatedField: "adress",
            value: e.currentTarget.textContent || "",
          } as UpdateCompanyPayload)
        }
      >
        {company.adress}
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
