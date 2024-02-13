import { sortingHelper } from "@/shared/lib/sortingHelper/sortingHelper";
import clientPromise from "../../../../lib/mongodb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  const orderBy = searchParams.get("orderBy");
  const filterBy = searchParams.get("filterBy");

  try {
    const client = await clientPromise;
    const db = client.db("systeme_test");
    const aggregationPipeline = [
      {
        $match: {
          description: { $regex: search },
        },
      },
    ];
    sortingHelper(aggregationPipeline, filterBy!, orderBy!);

    const res = await db
      .collection("price_plans")
      .aggregate(aggregationPipeline)
      .toArray();
    console.log("res", res);

    return Response.json({ res });
  } catch (e) {
    console.log("e", e);
  }
}

export async function PUT(request: Request) {
  const { id, description } = await request.json();
  const client = await clientPromise;
  const db = client.db("systeme_test");
  const res = await db
    .collection("price_plans")
    .updateOne({ id: id }, { $set: { description: description } });
  return Response.json({ res });
}
