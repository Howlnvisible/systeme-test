"use client";

import { EditModalViewType } from "@/shared/types/types";
import { RcTable } from "./rcTable/rcTable";
import { GenerateColumns } from "../lib/generateColumns/generateColumns";
import { Search } from "../search/search";

interface TableProps<T> {
  tableData: T[] | null;
  editModalViewType: EditModalViewType;
}

export function Table<T>(props: TableProps<T>) {
  const { tableData, editModalViewType } = props;
  const columns = GenerateColumns(tableData, editModalViewType);

  return (
    <div className="flex flex-col gap-8 sm:mb-6 overflow-hidden rounded shadow bg-dark-main text-white py-8">
      <div className="px-4 sm:px-8 flex flex-col gap-6 w-full">
        <div>
          <Search placeholder="Поиск" />
        </div>
        <RcTable
          //@ts-ignore
          columns={columns}
          emptyText="Нет данных"
          data={tableData!}
          rowKey="id"
          scroll={{ x: 900 }}
        />
      </div>
    </div>
  );
}
