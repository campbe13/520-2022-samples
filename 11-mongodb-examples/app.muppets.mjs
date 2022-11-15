import { mupparray, mupparray2 } from "./muppets.mjs"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"
dotenv.config()
// you will put this into a class, inline for
// pedagogicaly purposes 

let db
(async () => {
  try {
    // connect to server
    const client = new MongoClient(dbUri);
    await client.connect();
    console.log("client connected")

    // connect to db (create if does not exist)
    db = await client.db("muppets").command({ ping: 1 })
    console.log("client.db connected ")
  } catch (e) {
    console.log(e)
    process.exitCode(1)
  }
})();

(async () => {
  const name = "sesame-street"
  await db.dropCollection(name);


  // connect to collection (create if does not exist)
  let collection = await db.collection(name);
  console.log("db.collection ")

  let id = await collection.insertOne(gonzo)
  console.log(id)

  let result = await collection.insertMany(mupparray)
  console.log(result)
  console.log("inserted " + result.insertedCount)
  result = await collection.insertMany(mupparray2)
  console.log("inserted " + result.insertedCount)

  client.close();
})();