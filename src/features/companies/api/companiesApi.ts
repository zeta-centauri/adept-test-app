import { Company } from "../../../common/types/types";

const API_URL = "https://679ce92987618946e653d453.mockapi.io/companies";

export const fetchCompanies = async (
  page: number,
  limit: number,
  isAllSelected: boolean
) => {
  const getCompaniesUrl = new URL(API_URL);
  getCompaniesUrl.searchParams.append("page", `${page}`);
  getCompaniesUrl.searchParams.append("limit", `${limit}`);

  try {
    const response = await fetch(getCompaniesUrl);
    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных! Статус: ${response.status}`);
    }
    const data: Omit<Company, "isSelected">[] = await response.json();
    return data.map(
      (company) => ({ ...company, isSelected: isAllSelected } as Company)
    );
  } catch (e) {
    throw e;
  }
};
