const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const PORT = 3001;
const app = express();
app .use(parser.json());
app.use(cors());


const products = [{
    id: 1,
    name: 'Tandoori Desi Pizza',
    price: 14.99,
    description: 'Freshly baked pizza with Paneer Tikka cubes, onions, green peppers and mozzarella cheese. Garnished with cilantro. Sure to be a hit with veggie lovers',
    imageUrl: '../assets/Tandoori Paneer Naan Pizza.jpg',
    toppings: [],
    //sizes: [Size.LARGE, Size.MEDIUM, Size.SMALL]
},

{
    id: 2,
   name: 'Masala Fries',
   price: 5.99,
   description: 'Signature Seasoned Fries. A little on a tingled side',
   imageUrl: '../assets/Masala Fries.jpg',
   toppings: [],
   //sizes: [Size.SMALL, Size.LARGE]
  },


];

app.get("/products", (req, res) => res.send(products));

app.listen(PORT, () => console.log("server running: " + PORT));

