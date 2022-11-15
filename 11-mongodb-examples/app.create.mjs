import dotenv from "dotenv"
import { MongoClient } from "mongodb"
dotenv.config()
const dbUri = process.env.ATLAS_URI;
let db
// console.log(dbUrl)

// if you get a timeout you might be missing the IP addr in mongo access list
(async () => {
  try {
    // connect to server
    const client = new MongoClient(dbUri);
    await client.connect();
    console.log("client connected")

    // connect to db (create if does not exist)
    db = await client.db("demo").command({ ping: 1 })
    console.log("client.db connected ")
  } catch (e) {
    console.log(e)
  }
})();
// put code here to not continue if error in ^^ db connect
(async () => {


  await db.dropCollection("simple");

  // simple 
  collection = await db.collection("simple");
  const one = { name: "gonzo" }
  const array = [{ name: "animal" }, { name: "kermit" }, { name: "fozzie" }]
  const id = await collection.insertOne(one)
  console.log(id)

  const result = await collection.insertMany(array)
  console.log(result)
  console.log(result.insertedCount)

  client.close();
})();