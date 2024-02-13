export enum EditModalViewType {
  EDIT_PRODUCTS = "edit_products",
  EDIT_PRICE_PLANS = "edit_price_plans",
  EDIT_PAGES = "edit_pages",
}

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export interface CommonDataProps {
  id: string;
  active: boolean;
  createdAt: string;
}

export interface Products extends CommonDataProps {
  name: string;
}

export interface PricePlans extends CommonDataProps {
  description: string;
  removedAt: string;
}

export interface Pages extends CommonDataProps {
  title: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ColumnProps {
  title: string | React.ReactNode;
  dataIndex: string;
  key: string;
  align: string;
  width?: number;
  hidden?: any;
  onHeaderCell?: () => void;
  render?: (e?: any, item?: any) => JSX.Element | null;
}
