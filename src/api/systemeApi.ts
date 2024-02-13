import { BASE_URL } from "@/app/config";
import { Pages, PricePlans, Products } from "@/shared/types/types";
import axios from "axios";

const SystemeApi = axios.create({
  baseURL: BASE_URL,
  timeout: 4000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async (
  search?: string,
  orderBy?: string,
  filterBy?: string
): Promise<Products[] | null> => {
  try {
    const response = await SystemeApi.get(
      `/products?search=${search}&filterBy=${filterBy}&orderBy=${orderBy}`
    );
    return response.data.res;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getPricePlans = async (
  search?: string,
  orderBy?: string,
  filterBy?: string
): Promise<PricePlans[] | null> => {
  try {
    const response = await SystemeApi.get(
      `/pricePlans?search=${search}&filterBy=${filterBy}&orderBy=${orderBy}`
    );
    return response.data.res;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getPages = async (
  search?: string,
  orderBy?: string,
  filterBy?: string
): Promise<Pages[] | null> => {
  try {
    const response = await SystemeApi.get(
      `/pages?search=${search}&filterBy=${filterBy}&orderBy=${orderBy}`
    );
    return response.data.res;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const updateProducts = async (id: string, name: string) => {
  try {
    const response = await SystemeApi.put("/products", {
      id,
      name,
    });
    return response;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const updatePricePlans = async (id: string, description: string) => {
  try {
    const response = await SystemeApi.put("/pricePlans", {
      id,
      description,
    });
    return response;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const updatePages = async (id: string, title: string) => {
  try {
    const response = await SystemeApi.put("/pages", {
      id,
      title,
    });
    return response;
  } catch (e) {
    console.error(e);
    return null;
  }
};
