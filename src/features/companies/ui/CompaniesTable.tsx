import TableWrapper from "./TableWrapper";
import { useAppDispatch } from "../../../app/store";
import {
  toggleSelect,
  toggleSelectAll,
  updateCompany,
} from "../model/companiesSlice";
import { useSelector } from "react-redux";
import { selectCompanies, selectIsSelectAll } from "../model/selectors";
import TableRow from "./TableRow";
import { UpdateCompanyPayload } from "../model/types";

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
          company={company}
          handleEdit={handleEditRow}
          handleSelect={handleSelectRow}
        />
      ))}
    </TableWrapper>
  );
};

export default CompaniesTable;
