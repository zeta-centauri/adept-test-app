import { RootState } from "../../../app/store";

export const selectIsSelectAll = (state: RootState) =>
  state.companies.isAllSelected;

export const selectCompanies = (state: RootState) => state.companies.companies;
