//API page - return data from database for app.js to display (JLS)
const router = require('express').Router()

//get getCollection from dbconnect.js
const {getCollection} = require('../../../dbconnect')

//Return JSON Object with all Menu Items
router.get('/menu', async (_, response) => {
    const collection = await getCollection('food-truck', 'Menu')
    const found = await collection.find().toArray()
    response.send(found)
})

//Return JSON Object with all Events
router.get('/events', async (_, response) => {
    const collection = await getCollection('food-truck', 'Events')
    const found = await collection.find().toArray()
    response.send(found)
})

//note: 'id' may need to become '_id'

//Return JSON Object with data for 1 specified Menu Item
router.get('/menu/:id', async (_, response) => {
    const { id } = request.params
    const collection = await getCollection('food-truck', 'Menu')
    const found = await collection.findOne({ "id": parseInt(id) })
    response.send(found)
})

//Return JSON Object with data for 1 specified Event
router.get('/events/:id', async (_, response) => {
    const { id } = request.params
    const collection = await getCollection('food-truck', 'Events')
    const found = await collection.findOne({ "id": parseInt(id) })
    response.send(found)
})

//POST - add menu item to db from JSON object
router.post('/menu', async (request, response) => {
    //every menu item has a: name, description, price, imageURL
    const { name, description, price, imageURL } = request.body
    const collection = await getCollection('food-truck', 'Menu')
    const { acknowledged, insertedId } = await collection.insertOne({ name, description, price, imageURL })
    response.send({ acknowledged, insertedId })
})

//POST - add event item to db from JSON object
router.post('/events', async (request, response) => {
    //every event item has a: name, location, date, time
    const { name, location, date, time } = request.body
    const collection = await getCollection('food-truck', 'Events')
    const { acknowledged, insertedId } = await collection.insertOne({ name, location, date, time })
    response.send({ acknowledged, insertedId })
})

module.exports = router