import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Company, CompaniesSate, UpdateCompanyPayload } from "./types";

const initialCompanies: Company[] = [
  {
    id: 1,
    name: "Адепт",
    adress: "г. Нижний Новгород, пр. Гагарина,27, помещ. 204",
    isSelected: false,
  },
  {
    id: 1,
    name: "Exemter",
    adress: "г. Москва, Пресненская наб., дом 12, башня 'Федерация'",
    isSelected: false,
  },
];

const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    companies: initialCompanies,
  } as CompaniesSate,
  reducers: {
    toggleSelect: (state, action: PayloadAction<number>) => {
      const company = state.companies.find(
        (company) => company.id == action.payload
      );
      if (company) {
        company.isSelected = !company.isSelected;
      }
    },
    toggleSelectAll: (state, action: PayloadAction<boolean>) => {
      state.companies.forEach(
        (company) => (company.isSelected = action.payload)
      );
    },
    // addCompany: (state)
    removeSelected: (state) => {
      state.companies.filter((company) => !company.isSelected);
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
export const { toggleSelect, toggleSelectAll, removeSelected, updateCompany } =
  actions;
export default reducer;
