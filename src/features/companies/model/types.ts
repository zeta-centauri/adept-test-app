export interface Company {
  id: number;
  name: string;
  adress: string;
  isSelected: boolean;
}

export interface UpdateCompanyPayload {
  id: number;
  updatedField: Exclude<keyof Company, "id" | "isSelected">;
  value: string;
}

export type AddCompanyPayload = Omit<Company, "id" | "isSelected">;


export interface CompaniesSate {
  companies: Company[];
  isAllSelected: boolean;
}
