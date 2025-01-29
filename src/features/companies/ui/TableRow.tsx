import { Company, UpdateCompanyPayload } from "../model/types";

interface Props {
  company: Company;
  handleSelect: (id: number) => void;
  handleEdit: ({ id, updatedField, value }: UpdateCompanyPayload) => void;
}

const TableRow = ({ company, handleSelect, handleEdit }: Props) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={company.isSelected}
          onChange={() => handleSelect(company.id)}
        />
      </td>
      <td
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
      </td>
      <td
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
      </td>
    </tr>
  );
};

export default TableRow;
