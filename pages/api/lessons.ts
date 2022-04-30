// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import database from "./database";

// @ts-ignore
export default async function handler(req, res) {
  const db = await database();
  let doc = await await db.db.collection("lessons").find().toArray();
  // @ts-ignore
  doc = doc.map((e) => {
    return { id: e._id, title: e.title };
  });
  res.status(200).json(doc);
}
