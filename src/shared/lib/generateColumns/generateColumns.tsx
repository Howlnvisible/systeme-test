import { ActionButtons } from "@/shared/actionButtons/actionButtons";
import {
  ColumnProps,
  EditModalViewType,
  SortOrder,
} from "@/shared/types/types";
import { formatDate, isTimeFormat } from "../timeHelper/timeHelper";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TitleWithSort from "@/shared/titleWithSort/titleWithSort";

type SortingObjType = {
  sort: SortOrder;
  column: string;
};

const originalName: Record<string, string> = {
  updatedAt: "updated at",
  publishedAt: "published at",
  createdAt: "created at",
};

export function GenerateColumns<T>(
  tableData: T[] | null,
  editModalViewType: EditModalViewType
): ColumnProps[] {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const columns: ColumnProps[] = [];
  const [sortingObj, setSortingObj] = useState<SortingObjType>({
    sort: SortOrder.Desc,
    column: "",
  });

  if (!tableData) return columns;

  const firstItem = tableData[0] || [];

  const onHeaderClick = (column: string) => ({
    onClick: () => {
      setSortingObj((prevSortingObj) => {
        const newSortOrder =
          prevSortingObj.sort === SortOrder.Desc
            ? SortOrder.Asc
            : SortOrder.Desc;

        const newSortingObj: SortingObjType = {
          sort: newSortOrder,
          column: column,
        };

        params.set("filterBy", newSortingObj.column);
        params.set("orderBy", newSortingObj.sort);
        router.replace(`${pathname}?${params.toString()}`);

        return newSortingObj;
      });
    },
  });

  Object.keys(firstItem as object).forEach((key) => {
    if (key !== "_id" && key !== "id") {
      const displayName = originalName[key] || key;

      columns.push({
        title: (
          <TitleWithSort
            title={displayName.charAt(0).toUpperCase() + displayName.slice(1)}
            ascending={
              sortingObj.sort === SortOrder.Asc && sortingObj.column === key
            }
          />
        ),
        dataIndex: key,
        key,
        align: "center",
        width: 120,
        hidden: !tableData.some((item: any) => item[key]),
        onHeaderCell: () => onHeaderClick(key),
        render: (data: string | boolean) => {
          const formattedData = isTimeFormat(key)
            ? formatDate(data as string)
            : typeof data === "boolean"
            ? String(data)
            : data;
          return (
            <span className="truncate whitespace-nowrap">{formattedData}</span>
          );
        },
      });
    }
  });

  columns.push({
    title: "Action",
    dataIndex: "id",
    key: "action",
    align: "center",
    width: 120,
    render: (_, record: any) => {
      return <ActionButtons editModalView={editModalViewType} data={record} />;
    },
  });

  return columns;
}
