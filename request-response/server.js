const fs = require('fs');
const express = require('express');
const app = express();
let items;
const data = fs.readFileSync('./items.json', 'utf-8');
items = JSON.parse(data)


app.listen(3000, () => {
   console.log('Server started .. ');
})

app.get('/', (req, res) => {
   res.send(
    items.filter(item => ({ ...item }))
         .map(item => (
            `<div>
               <b>ID: </b> ${item.id},
               <b>Name:</b> ${item.name}, 
               <b>Price:</b> ${item.price},
               <b>Quantity:</b> ${item.quantity}
             </div>`
         )).join('')
   )
})

app.get('/items/:id', (req, res) => {
   const id = parseInt(req.params.id)
   const productId = items.findIndex(item => Number(item.id) === id)

   if (productId === -1) return res.status(404).send()
   res.send(
      `<div>
         <b>ID: </b> ${items[productId].id},
         <b>Name:</b> ${items[productId].name}, 
         <b>Price:</b> ${items[productId].price},
         <b>Quantity:</b> ${items[productId].quantity}
       </div>`
   )
});