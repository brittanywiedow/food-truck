
//Let's get some new menu form data added!! :) (AJ)
document.addEventListener('DOMContentLoaded', () => {
    const addMenuForm = document.getElementById('add-menu-item-form')
    addMenuForm.addEventListener('submit', async(e) => {
        //prevent default event prevents page from automatically refreshing afte rthe submit button is clicked (developer.mozilla.org)
        e.preventDefault()
        //collecting input values from the web form
        const name = document.getElementById('name').value.trim() //using trim to get rid of extra spacing before storing the data
        const description = document.getElementById('description').value.trim()
        //orice is stored as a string in mongo db as we do not expect to manipulate this data farther
        const price = document.getElementById('price').value.trim()
        const imageUrl = document.getElementById('imageUrl').value.trim()

        const id = Date.now() //Found this method on (dev.to)
        //const id = Math.floor(math.random() * 100) --- opted out of using math random for new id, wanted to try out Date.now

        //Requesting new data
        const newMenuItem = { name, description, price, imageUrl, id }
        //Sending to backend POST
        const response = await fetch('/api/v1/foodtruck/menu/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMenuItem)
        })
        //sending result and pushing to backend/DB
        const result = await response.json()
        //if-else to verify if menu item was added
        if(result.acknowledged){
            alert('Menu item has been added')
            addMenuForm.reset() // Will clear the form after a sucessful submission
        }else{
            alert('Something went wrong, please try again.')
        }

    })
})

// NOw let's get some new events added!! :) (AJ)
document.addEventListener('DOMContentLoaded', () => {
    const addEventForm = document.getElementById('add-event-form')
    addEventForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        //input values for the new events
        const name = document.getElementById('eventName').value.trim()
        const location = document.getElementById('location').value.trim()
        const date = document.getElementById('date').value.trim()
        const time = document.getElementById('time').value.trim()

        const id = Date.now() //Creating new ID with same method

        const newEvent = { name, location, date, time, id }
        //creating the backend connection
        const response = await fetch('/api/v1/foodtruck/events/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEvent)
        })
        //pushing to the db
        const result = await response.json()
        //verifying if event items were entered
        if (result.acknowledged) {
            alert('New event has been added')
            addEventForm.reset() //clearing event form once submitted
            if (typeof callMenuItems === 'function') callMenuItems()  // Refresh the menu so new menu items display right away
        } else {
            alert('Something went wrong, please try again.')
        }
    })
})