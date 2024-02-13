import { getPages } from "@/api/systemeApi";
import { Table } from "@/shared/table";
import { EditModalViewType } from "@/shared/types/types";

export default async function PagesPage({
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

  const pages = await getPages(search, orderBy, filterBy);

  return (
    <Table tableData={pages} editModalViewType={EditModalViewType.EDIT_PAGES} />
  );
}
