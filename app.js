//Pull in express and create app (bw)
const express = require ('express')
const app = express()

//Connect App to API (JLS)
app.use('/api/v1/foodtruck', require('./routes/api/v1/foodtruck'))
//find html object with items from API (JLS)
const menu = document.getElementById('menu-items') //it's a div elm
const events = document.getElementById('events-list') //it's a div elm

const mp = document.createElement('p')
const ep = document.createElement('p')

mp.textContent = 'sample text'
ep.textContent = 'sample text'

menu.append(mp)
events.append(ep)
//---

//5 Menu Items, Added to MongoDB 4/13/2025 (bw)
const menuItems = 
[
    {
        "name": "Spicy Korean BBQ Taco",
        "description": "Marinated beef with kimchi slaw, sesame seeds, and spicy gochujang sauce wrapped in a warm corn tortilla.",
        "price": 7.99,
        "imageUrl": "https://diethood.com/wp-content/uploads/2013/11/korean-beef-tacos-7.jpg"
    },
    {
        "name": "Sweet Chili Chicken Taco",
        "description": "Crispy chicken topped with sweet chili sauce, pickled cucumbers, and fresh cilantro in a flour tortilla.",
        "price": 6.50,
        "imageUrl": "https://pinchofyum.com/wp-content/uploads/Red-Chile-Chicken-Tacos-1.jpg"
    },
    {
        "name": "Crispy Fish Taco",
        "description": "Golden fried fish with tangy slaw, chipotle crema, and lime zest served in a soft shell.",
        "price": 7.25,
        "imageUrl": "https://themenumaid.com/wp-content/uploads/2024/09/IMG_E5299-blog-photo.jpg"
    },
    {
        "name": "Grilled Street Corn Taco",
        "description": "Roasted corn, cotija cheese, crema, and chili-lime seasoning over black beans in a corn tortilla.",
        "price": 5.99,
        "imageUrl": "https://cozycravings.com/wp-content/uploads/2020/08/DSC_0025-scaled.jpg"
    },
    {
        "name": "Smoky Jackfruit Taco",
        "description": "Pulled jackfruit in smoky chipotle sauce with avocado, cabbage, and lime—vegan and flavorful!",
        "price": 6.75,
        "imageUrl": "https://jessicainthekitchen.com/wp-content/uploads/2023/12/Jackfruit-Tacos-17.jpg"
    }
  ]
  
  //5 Events, Added to MongoDB 4/13/2025 (bw)
  const Events = 
  [
    {
        "name": "Appleton North Food Truck Rally",
        "location": "2600 N Casaloma Dr, Appleton, WI 54913",
        "date": "05-23-2025",
        "time": "3:30 PM - 7:00 PM"
    },
    {
        "name": "Poplar Hall Food Truck Fest",
        "location": "Downtown Art District, 45 Main St, San Antonio, TX",
        "date": "06-26-2025",
        "time": "4:00 PM - 8:00 PM"
    },
    {
        "name": "Paperfest",
        "location": "Sunset Park, Kimberly",
        "date": "07-19-2025",
        "time": "5:00 PM - 10:00 PM"
    },
    {
        "name": "Volunteer Fox Cities You Belong Block Party",
        "location": "Smith Park, Menasha",
        "date": "07-20-2025",
        "time": "11:00 AM - 2:00 PM"
    },
    {
        "name": "Building for Kids Children's Parade",
        "location": "City Park, Appleton",
        "date": "07-20-2025",
        "time": "5:45 PM - 8:00 PM"
    }
  ]
  