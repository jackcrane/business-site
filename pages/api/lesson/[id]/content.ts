// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../database";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const db = await database();
  console.log(req.query);
  let doc = await db.db
    .collection("lessons")
    .findOne(new db.ObjectID(req.query.id));
  console.log(doc);
  res.status(200).json(doc);
}
