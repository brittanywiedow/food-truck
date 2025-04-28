//find html object with items from API (JLS) *Moved this code from app.js to here (bw)

const menu = document.getElementById('menu-items') //it's a div elm
const events = document.getElementById('events-list') //it's a div elm


// Commented these out because the code was creating an empty area with the "sample text" in it. (bw)
// const mp = document.createElement('p')
// const ep = document.createElement('p')
// mp.textContent = 'sample text'
// ep.textContent = 'sample text'
// menu.append(mp)
// events.append(ep)


// Loading the menu items from API and display in the menu-items div (AJ)
const callMenuItems = async () => {
    const response = await fetch('/api/v1/foodtruck/menu')
    const menuItems = await response.json()
    const menuPlace = document.getElementById('menu-items')
    //Loading each menu item that is in the database(AJ)
    menuItems.forEach(item => {
        const display = document.createElement('div')
        display.classList.add('menu-item')
        //Displaying menu items in HTML(AJ)
        display.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}" class="menu-img">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class ="price">$${item.price.toFixed(2)}</p>
            `
        menuPlace.appendChild(display)
    });
}



// Call event list and details (bw)
// Also added map and "learn more" section that appears with event details (bw)
const callEventDetails = async (eventId) => {
    const response = await fetch(`/api/v1/foodtruck/events/${eventId}`)
    const event = await response.json()

    const eventInfoContent = document.getElementById('event-info-content')

    eventInfoContent.innerHTML = `
        <div class="event-details-card">

            <h2>${event.name}</h2>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Time:</strong> ${event.time}</p><br>

            <!-- Custom Map for location, took this from my css final -->
            <div class="map-container">
                <iframe
                    width="100%"
                    height="250"
                    frameborder="0" style="border:0"
                    src="https://www.google.com/maps?q=${encodeURIComponent(event.location)}&output=embed"
                    allowfullscreen>
                </iframe>
            </div>
        </div>

        <!-- Put this here so it loads on event details and isn't always there with a gap on top in case no event is selected -->
        <div class="social-info-card">
            <h3>Love Food Trucks?!</h3>
            <p>
                Learn more about the <a href="https://www.foxvalleyfoodtruckrally.com/" target="_blank">Fox Valley Food Truck Rally Association</a>! 
            </p>
            <p>
                Or follow them on <a href="https://www.facebook.com/FoxValleyFoodTruckAssociation" target="_blank">Facebook!</a>           
            </p>
 
        </div>

    `
}

// Load events from Mongo and display on index.html (bw)
// Was going to do it the same as the recipe example with Modal but since we decided to place it in a new area, I went a different route (bw)
const callEvents = async () => {
    const response = await fetch('/api/v1/foodtruck/events')
    const events = await response.json()
    const eventsPlace = document.getElementById('events-list')
    events.forEach(event => {
        const display = document.createElement('div')
        display.classList.add('event-item')
        // Will need dataset later to call details 
        // Side note- dataset.id will always give the value as a string 
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
        display.dataset.id = event.id
        display.innerHTML = `
            <h3>${event.name}</h3>
            <p>${event.date}</p>
        `
        eventsPlace.appendChild(display)
    })

    document.querySelectorAll('.event-item').forEach(item => {
        item.addEventListener('click', () => {
            // This is where dataset comes in, it needs to be called 
            callEventDetails(item.dataset.id)
        })
    })
}

// callMenuItems()
// callEvents()

// Call the functions (got from js-my-recipes)
;(async () => {
    callMenuItems();
    callEvents();
})()