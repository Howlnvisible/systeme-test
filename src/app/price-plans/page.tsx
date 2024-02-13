import { getPricePlans } from "@/api/systemeApi";
import { Table } from "@/shared/table";
import { EditModalViewType } from "@/shared/types/types";

export default async function PricePlansPage({
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

  const pricePlans = await getPricePlans(search, orderBy, filterBy);

  return (
    <Table
      tableData={pricePlans}
      editModalViewType={EditModalViewType.EDIT_PRICE_PLANS}
    />
  );
}
