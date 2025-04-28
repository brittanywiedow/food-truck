
const { MongoClient, ObjectId } = require('mongodb')

//check group message for the secrets/mongodb information 
const { uri } = require('./secrets/mongodb.json')

const client = new MongoClient(uri)

const getCollection = async (dbName, collectionName) => {
    await client.connect()
    return client.db(dbName).collection(collectionName)
}



module.exports = { getCollection, ObjectId }