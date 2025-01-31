import { Company, UpdateCompanyPayload } from "../model/types";
import { Table } from "../../../common/components/Table/Table";
import EditableText from "../../../common/components/EditableText/EditableText";

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
      <Table.Cell>
        <EditableText
          initialValue={company.name}
          onSave={(value: string) =>
            handleEdit({
              id: company.id,
              updatedField: "name",
              value: value,
            } as UpdateCompanyPayload)
          }
        />
      </Table.Cell>
      <Table.Cell>
        <EditableText
          initialValue={company.adress}
          onSave={(value: string) =>
            handleEdit({
              id: company.id,
              updatedField: "adress",
              value: value,
            } as UpdateCompanyPayload)
          }
        />
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
