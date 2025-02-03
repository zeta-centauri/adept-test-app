import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CompaniesSate,
  UpdateCompanyPayload,
  AddCompanyPayload,
} from "./types";
import { Company } from "../../../common/types/types";
import { fetchCompanies } from "../api/companiesApi";

export const getCompanies = createAsyncThunk(
  "companies/getCompanies",
  async ({
    page,
    limit,
    isAllSelected,
  }: {
    page: number;
    limit: number;
    isAllSelected: boolean;
  }) => {
    return await fetchCompanies(page, limit, isAllSelected);
  }
);

const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    companies: [],
    page: 1,
    hasMore: true,
    isAllSelected: false,
    isLoading: false,
    error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(getCompanies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCompanies.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.length === 0) {
          state.hasMore = false;
        } else {
          state.companies.push(...action.payload);
          state.page += 1;
        }
      })
      .addCase(getCompanies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Ошибка загрузки данных";
      });
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
