import clientPromise from "../../../../lib/mongodb";
import { sortingHelper } from "@/shared/lib/sortingHelper/sortingHelper";

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
          name: { $regex: search },
        },
      },
    ];
    sortingHelper(aggregationPipeline, filterBy!, orderBy!);

    const res = await db
      .collection("products")
      .aggregate(aggregationPipeline)
      .toArray();

    return Response.json({ res });
  } catch (e) {
    console.log("e", e);
  }
}

export async function PUT(request: Request) {
  const { id, name } = await request.json();

  try {
    const client = await clientPromise;
    const db = client.db("systeme_test");
    const res = await db
      .collection("products")
      .updateOne({ id: id }, { $set: { name: name } });
    return Response.json({ res });
  } catch (e) {
    console.log("e", e);
  }
}
