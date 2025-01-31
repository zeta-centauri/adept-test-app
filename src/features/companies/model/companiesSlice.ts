import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CompaniesSate,
  UpdateCompanyPayload,
  AddCompanyPayload,
} from "./types";
import { initialCompanies } from "./initialCompanies";
import { Company } from "../../../common/types/types";

const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    companies: initialCompanies,
    isAllSelected: false,
  } as CompaniesSate,
  reducers: {
    toggleSelect: (state, action: PayloadAction<number>) => {
      const company = state.companies.find(
        (company) => company.id == action.payload
      );
      if (company) {
        if (company.isSelected) {
          state.isAllSelected = false;
        }
        company.isSelected = !company.isSelected;
      }
    },
    toggleSelectAll: (state) => {
      state.companies.forEach(
        (company) => (company.isSelected = !state.isAllSelected)
      );
      state.isAllSelected = !state.isAllSelected;
    },
    addCompany: (state, action: PayloadAction<AddCompanyPayload>) => {
      const newId = state.companies.length
        ? Math.max(...state.companies.map((c) => c.id)) + 1
        : 1;
      state.companies.push({
        id: newId,
        name: action.payload.name,
        adress: action.payload.adress,
        isSelected: state.isAllSelected,
      } as Company);
    },

    removeSelected: (state) => {
      state.companies = state.companies.filter(
        (company) => !company.isSelected
      );
    },
    updateCompany: (state, action: PayloadAction<UpdateCompanyPayload>) => {
      const company = state.companies.find(
        (company) => company.id == action.payload.id
      );
      if (company) {
        company[action.payload.updatedField] = action.payload.value;
      }
    },
  },
});

const { actions, reducer } = companiesSlice;
export const {
  toggleSelect,
  toggleSelectAll,
  removeSelected,
  addCompany,
  updateCompany,
} = actions;
export default reducer;
