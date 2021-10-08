

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
    imageUrl: '../images/Tandoori Paneer Naan Pizza.jpg',
    toppings: [],
    //sizes: [Size.large, Size.medium, Size.small]
},

{
    id: 2,
   name: 'Masala Fries',
   price: 5.99,
   description: 'Signature Seasoned Fries. A little on a tingled side',
   imageUrl: '../images/Masala Fries.jpg',
   toppings: [],
   //sizes: 'Size.SMALL, Size.LARGE'
  },


];


app.get("/products", (req, res) => res.send(products));
app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const product = products.find((p) => p.id === id);

    if (product) res.send(product);
    res.status(404).send(`Product with id = ${id} doesn't exist`);
})

app.listen(PORT, () => console.log("server running: " + PORT));

