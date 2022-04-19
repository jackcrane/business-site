import database from "./database";

export default async function handler(req, res) {
  const db = await database();
  let doc = await db.db.collection("lessons").find().toArray();
  // set variable dts to the id and title of each object in doc
  let dts = doc.map(function (d) {
    return {
      _id: d._id,
      title: d.title,
      uri: `/lesson/${d._id}`,
    };
  });

  res.status(200).json(dts);
}
