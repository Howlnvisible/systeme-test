import { getProducts } from "@/api/systemeApi";
import { Table } from "@/shared/table";
import { EditModalViewType } from "@/shared/types/types";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: {
    search?: string;
    orderBy?: string;
    filterBy?: string;
  };
}) {
  const search = searchParams.search || "";
  const orderBy = searchParams.orderBy || "";
  const filterBy = searchParams.filterBy || "";

  const products = await getProducts(search, orderBy, filterBy);

  return (
    <Table
      tableData={products}
      editModalViewType={EditModalViewType.EDIT_PRODUCTS}
    />
  );
}
