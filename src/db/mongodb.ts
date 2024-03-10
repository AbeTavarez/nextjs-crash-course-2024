import { MongoClient } from "mongodb";


let dbClient;

try {
    if (!process.env.MONGODB_URI) {
        throw new Error('MongoDB URI is required!');
    }

    dbClient = new MongoClient(process.env.MONGODB_URI);
    dbClient.connect();

} catch (err) {
    console.log(err);
    
}

export default dbClient as MongoClient;