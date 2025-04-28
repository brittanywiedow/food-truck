//find html object with items from API (JLS) *Moved this code from app.js to here (bw)

const menu = document.getElementById('menu-items') //it's a div elm
const events = document.getElementById('events-list') //it's a div elm

const mp = document.createElement('p')
const ep = document.createElement('p')

mp.textContent = 'sample text'
ep.textContent = 'sample text'

menu.append(mp)
events.append(ep)

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

callMenuItems()