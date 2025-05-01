//Add admin js for adding events and menus here?

//Let's get some new menu form data added!! :) (AJ)
document.addEventListener('DOMContentLoaded', () => {
    const addMenuForm = document.getElementById('add-menu-item-form')
    addMenuForm.addEventListener('submit', async(e) => {
        //prevent default event prevents page from automatically refreshing afte rthe submit button is clicked (developer.mozilla.org)
        e.preventDefault()
        //collecting input values from the web form
        const name = document.getElementById('name').value.trim() //using trim to get rid of extra spacing before storing the data
        const description = document.getElementById('description').value.trim()
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
// document.addEventListener('DOMContentLoaded', () => {
//     const addMenuForm = document.getElementById('add-event-form')
//     addMenuForm.addEventListener('submit', async(e) => {
//         e.preventDefault()
//         //collecting input values from the web form      ---         change to event mongo data
//         const name = document.getElementById('name').value.trim()
//         const description = document.getElementById('description').value.trim()
//         const price = document.getElementById('price').value.trim()
//         const imageUrl = document.getElementById('imageUrl').value.trim()

//         const id = Date.now()

//         //Requesting new data        ---         change to event mongo data
//         const newMenuItem = { name, description, price, imageUrl, id }
//         //Sending to backend POST
//         const response = await fetch('/api/v1/foodtruck/menu/add', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(newMenuItem)
//         })
//         //sending result and pushing to backend/DB
//         const result = await response.json()
//         //if-else to verify if menu item was added
//         if(result.acknowledged){
//             alert('Menu item has been added')
//             addMenuForm.reset() // Will clear the form after a sucessful submission
//         }else{
//             alert('Something went wrong, please try again.')
//         }
        
//     })
// })