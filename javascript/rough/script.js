
let quantity = 0;

const quantityButton = document.getElementById('quantity')
    quantityButton.onclick = () => {
        console.log(quantity)
    }

const addButton = document.getElementById('add')
  addButton.onclick = () => {
    console.log(quantity += 1 )
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


   
   let name = 'Owais';
   console.log(`my name is ${name}`)

   let cost = 5*1 + 2*3 + 9*1;
   console.log(`cost of food $${cost}`)

   let tax = 1/10 * cost;
   console.log(`tax is $${tax}`)

   let totalCost = cost + tax;
   console.log(`Total Cost: $${cost + tax}`)


   let user = prompt('Enter age');
   if (user >= 18){
      console.log('user can drive')
   } else {
      console.log('user cant drive');
   }