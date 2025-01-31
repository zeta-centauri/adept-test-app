import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/store";
import {
  toggleSelectAll,
  updateCompany,
  toggleSelect,
} from "../../model/companiesSlice";
import { selectCompanies, selectIsSelectAll } from "../../model/selectors";
import { UpdateCompanyPayload } from "../../model/types";
import TableRow from "./CompaniesTableRow";
import TableWrapper from "./CompaniesTableWrapper";

const CompaniesTable = () => {
  const dispatch = useAppDispatch();

  const companies = useSelector(selectCompanies);
  const isSelectAll = useSelector(selectIsSelectAll);

  const handleSelectAll = () => {
    dispatch(toggleSelectAll());
  };

  const handleEditRow = (data: UpdateCompanyPayload) => {
    dispatch(updateCompany(data));
  };

  const handleSelectRow = (id: number) => {
    dispatch(toggleSelect(id));
  };

  return (
    <TableWrapper isSelectAll={isSelectAll} handleSelectAll={handleSelectAll}>
      {companies.map((company) => (
        <TableRow
          key={company.id}
          company={company}
          handleEdit={handleEditRow}
          handleSelect={handleSelectRow}
        />
      ))}
    </TableWrapper>
  );
};

export default CompaniesTable;
