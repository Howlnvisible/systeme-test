import { SortOrder } from "@/shared/types/types";

export function sortingHelper(
  aggregationPipeline: Array<Record<string, any>>,
  filterName: string,
  order: string
) {
  if (
    filterName !== "" &&
    filterName !== null &&
    order !== "" &&
    order !== null
  ) {
    const sortStage: Record<string, number> = {};
    sortStage[filterName] = order === SortOrder.Desc ? -1 : 1;

    aggregationPipeline.push({
      $sort: sortStage,
    });
  }
}
