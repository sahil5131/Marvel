import { MongoClient } from "mongodb";

async function main(){
    
    // const uri = "mongodb+srv://sahil:m9TYbe2nGBMZ5kfd@cluster0.ezx7uw1.mongodb.net/?retryWrites=true&w=majority";
    const uri = "mongodb://localhost:27017/Marvel";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

export default main;