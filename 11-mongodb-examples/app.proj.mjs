// demo read from  a collection use projection

//import { gonzo, mupparray } from "./muppets.mjs"

import dotenv from "dotenv"
import { MongoClient } from "mongodb"
dotenv.config()
const dbUrl = process.env.ATLAS_URI;
// console.log(dbUrl)
const client = new MongoClient(dbUrl);
// if you get a timeout you might be missing the IP addr in mongo access list
await client.connect();
console.log("client connected")

// connect to db (create if does not exist)
const db = client.db("demo");
console.log("client.db ")


// connect to collection (create if does not exist)
const collection = await db.collection("mupps");
// read
let projection = { name: 1, "personal.age" : 2 }
const cursor = await collection.find().project(projection)
const array    = await cursor.toArray()
//console.log("array " + array)
// console.log("read " + array.count) ?? undefined
array.forEach( item => console.log(item))

client.close();