import { IUserInfo, UserApiResponse } from "../../types/users";
import { GET_CONTACTS_URL } from "./constants";

export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

// TODO: Обработать ошибки запроса
export const getContacts = async (): Promise<IUserInfo[]> => {
  const response = await get<UserApiResponse>(GET_CONTACTS_URL);
  return response.results;
};
