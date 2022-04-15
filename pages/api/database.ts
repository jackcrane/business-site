import { MongoClient, ObjectID } from "mongodb";
import nextConnect from "next-connect";

const MongoDBHandler = async () => {
  const client = new MongoClient(process.env.DB_CONN_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db("business");
  return {
    client,
    db,
    ObjectID,
  };
};

export default MongoDBHandler;
