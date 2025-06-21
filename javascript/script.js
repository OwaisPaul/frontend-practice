
let quantity = 0;

const quantityButton = document.getElementById('quantity')
    quantityButton.onclick = () => {
        console.log(quantity)
    }

const addButton = document.getElementById('add')
  addButton.onclick = () => {
    console.log(quantity += 1)
  }

const plus2 = document.getElementById('plus2')
   plus2.onclick = () => {
    console.log(quantity += 2)
   }

const plus3 = document.getElementById('plus3')
   plus3.onclick = () => {
    console.log('items in cart' +  ' ' + (quantity += 3))
   } 

const reset = document.getElementById('reset')
   reset.onclick = () => {
    console.log('cart was reset to' + ' ' + (quantity = 0))
   }