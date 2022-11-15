import { gonzo, mupparray } from "./muppets.mjs"
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
let collection = await db.collection("mupps");
console.log("db.collection ")

let id = await collection.insertOne(gonzo)
console.log(id)

let result = await collection.insertMany(mupparray)
console.log(result)
console.log(result.insertedCount)
// simple 
collection = await db.collection("simple");
const one = { name: "gonzo"}
const array  = [ { name: "gonzo"}, { name: "kermit"}, { name: "fozzie"} ]
id = await collection.insertOne(one)
result = await collection.insertMany(array)

client.close();