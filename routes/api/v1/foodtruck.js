//API page - return data from database for app.js to display (JLS)
const router = require('express').Router()

//get getCollection from dbconnect.js
const { getCollection } = require('../../../dbconnect')


//POST - add menu item to db from JSON object
//Added "id" and changed endpoint (bw) *tested and working
router.post('/menu/add', async (request, response) => {
    //every menu item has a: name, description, price, imageURL
    const { id, name, description, price, imageURL } = request.body
    const collection = await getCollection('food-truck', 'Menu')
    const { acknowledged, insertedId } = await collection.insertOne({ id, name, description, price, imageURL })
    response.send({ acknowledged, insertedId })
})

//POST - add event item to db from JSON object
//Added "id" and changed endpoint (bw) *tested and working
router.post('/events/add', async (request, response) => {
    //every event item has a: name, location, date, time
    const { id, name, location, date, time } = request.body
    const collection = await getCollection('food-truck', 'Events')
    const { acknowledged, insertedId } = await collection.insertOne({ id, name, location, date, time })
    response.send({ acknowledged, insertedId })
})


//Return JSON Object with all Menu Items *tested and working
router.get('/menu', async (_, response) => {
    const collection = await getCollection('food-truck', 'Menu')
    const found = await collection.find().toArray()
    response.send(found)
})

//Return JSON Object with all Events *tested and working
router.get('/events', async (_, response) => {
    const collection = await getCollection('food-truck', 'Events')
    const found = await collection.find().toArray()
    response.send(found)
})

//Return JSON Object with data for 1 specified Menu Item by id
//Updated the search by id and added if/else (bw) *tested and working
router.get('/menu/:id', async (request, response) => {
    const { id } = request.params
    const collection = await getCollection('food-truck', 'Menu')
    const found = await collection.findOne({ "id": parseInt(id) })
    if (found) response.send(found)
    else response.send({ error: { message: `Could not find menu item with id: ${id}`
}})
})

//Return JSON Object with data for 1 specified Event by id
//Updated the search by id and added if/else (bw) *tested and working
router.get('/events/:id', async (request, response) => {
    const { id } = request.params
    const collection = await getCollection('food-truck', 'Events')
    const found = await collection.findOne({ "id": parseInt(id) })
    if (found) response.send(found)
    else response.send({ error: { message: `Could not find event with id: ${id}` }})

})


module.exports = router