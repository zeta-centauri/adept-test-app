import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/store";
import {
  toggleSelectAll,
  updateCompany,
  toggleSelect,
  getCompanies,
} from "../../model/companiesSlice";
import { selectCompanies } from "../../model/selectors";
import { UpdateCompanyPayload } from "../../model/types";
import TableRow from "./CompaniesTableRow";
import { useInfiniteScroll } from "../../../../common/hooks/useInfiniteScroll";
import styled from "styled-components";
import { Table } from "../../../../common/components/Table";
import CompaniesTableHeader from "./CompaniesTableHeader";
import Loader from "./Loader";
import ErrorBlock from "./ErrorBlock";

const CompaniesTable = () => {
  const dispatch = useAppDispatch();

  const { companies, isLoading, isAllSelected, error, page, hasMore } =
    useSelector(selectCompanies);

  const { ref } = useInfiniteScroll({
    hasMore,
    isLoading,
    page,
    limit: 15,
    threshold: 0.1,
    onLoadMore: (page, limit) =>
      dispatch(getCompanies({ page, isAllSelected, limit })),
  });

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
    <TableWrapper>
      <Table.Root $w="100%">
        <CompaniesTableHeader
          isSelectAll={isAllSelected}
          handleSelectAll={handleSelectAll}
        />
        <Table.Body>
          {companies.map((company) => (
            <TableRow
              key={company.id}
              company={company}
              handleEdit={handleEditRow}
              handleSelect={handleSelectRow}
            />
          ))}
        </Table.Body>
      </Table.Root>
      {!isLoading && hasMore && !error && (
        <div
          ref={ref}
          style={{
            height: "300px",
          }}
        />
      )}
      {isLoading && <Loader />}
      {error && <ErrorBlock errorMessage={error} />}
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  height: 70%;
  width: 100%;
  overflow-y: auto;
  overflow-y: auto;
`;

export default CompaniesTable;
