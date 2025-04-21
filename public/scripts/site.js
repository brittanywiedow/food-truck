//find html object with items from API (JLS) *Moved this code from app.js to here (bw)

const menu = document.getElementById('menu-items') //it's a div elm
const events = document.getElementById('events-list') //it's a div elm

const mp = document.createElement('p')
const ep = document.createElement('p')

mp.textContent = 'sample text'
ep.textContent = 'sample text'

menu.append(mp)
events.append(ep)