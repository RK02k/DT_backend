const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(uri);

let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db("eventDB");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

function getDB() {
    if (!db) {
        throw new Error("Database not connected");
    }
    return db;
}

module.exports = { connectDB, getDB };