
// let quantity = 0;

// const quantityButton = document.getElementById('quantity')
//     quantityButton.onclick = () => {
//         console.log(quantity)
//     }

// const addButton = document.getElementById('add')
//   addButton.onclick = () => {
//     console.log(quantity += 1 )
//   }

// const plus2 = document.getElementById('plus2')
//    plus2.onclick = () => {
//     console.log(quantity += 2)
//    }

// const plus3 = document.getElementById('plus3')
//    plus3.onclick = () => {
//     console.log('items in cart' +  ' ' + (quantity += 3))
//    } 

// const reset = document.getElementById('reset')
//    reset.onclick = () => {
//     console.log('cart was reset to' + ' ' + (quantity = 0))
//    }


   
//    let name = 'Owais';
//    console.log(`my name is ${name}`)

//    let cost = 5*1 + 2*3 + 9*1;
//    console.log(`cost of food $${cost}`)

//    let tax = 1/10 * cost;
//    console.log(`tax is $${tax}`)

//    let totalCost = cost + tax;
//    console.log(`Total Cost: $${cost + tax}`)


//    let user = prompt('Enter age');
//    if (user >= 18){
//       console.log('user can drive')
//    } else {
//       console.log('user cant drive');
//    }

   const now = new Date()
   const hour = now.getHours()
   const name = 'George'
   
   console.log(hour)
   if(hour >= 6 && hour < 12){
      console.log(`Good morning ${name}`)
   } else if(hour >= 12 && hour < 17){
      console.log(`Good afternoon  ${name}`)
   } else {
      console.log(`Good night ${name}`)
   }


function greet(name) {
   if(name){
      console.log(`hello! ${name}`)
   } else {
      console.log('Hi there!')
   }
   
} 
greet('owais')
greet('ali')
greet('the')
greet()

const convertToFahrenheit = function(celsius){
   return (celsius * 9/5) + 32
}

console.log(convertToFahrenheit(25))

const convertToCelsius = (fahrenheit) => {
   return (fahrenheit - 32) * 5/9
}

console.log(convertToCelsius(86))

  const products = {
   basketball: 2095
  }

  products.basketball += 500
  
  console.log(products)

  const comparePrice = function(product1, product2) {
      if(product1.price < product2.price){
       return product1
      } else {
        return 'price is high'
      }
  }

  const iceCream = {
   name:'vanilla',
   price: 30
  }

  const fullGobi = {
   name: 'sabzi',
   price: 22
  }

  console.log(comparePrice(iceCream, fullGobi))


const isSameProduct = (product1, product2) => {
   if(product1 === product2 ){
      return true
   } else {
     return false
   }
}

 const paste = iceCream

console.log(isSameProduct(iceCream, fullGobi));

const greeting = "Good Morning"
const lowerLetters = greeting.toLowerCase()
console.log(lowerLetters)

const repetition = greeting.repeat(2)

console.log(repetition)


console.log(document.querySelector('#btn'))
const btnA = document.querySelector('#btn')
btnA.onclick = () => {
   btnA.innerHTML = 'btn a clicked'
}
const btnB = document.querySelector('#btn-b')
btnB.onclick = () => {
   btnB.innerHTML = 'btn b clicked'
   
}

console.log(btnB)
console.log(document.title)

const heads = document.querySelector('#heads')
heads.onclick = () => {
   const para = document.querySelector('#para')
   para.innerText = 'You chose heads'
}

const tails = document.querySelector('#tails')
tails.onclick = () => {
   const para = document.querySelector('#para')
   para.innerText = 'You chose tails'
}

const submitBtn = document.querySelector('#submit');

submitBtn.onclick = () => {
   const input = document.querySelector('input')
   const display = document.querySelector('#inputpara')
   display.innerText = `Your name is:${input.value}`
}

const todoList = ['batte', 'chai', 'shongun']

renderTodo();

function renderTodo() {

let todoListHtml = '';

for(let i = 0; i < todoList.length; i++){
   const todo = todoList[i];
   const html = `<p>${todo}</p>`;

   todoListHtml += html;
}

document.querySelector('#list')
    .innerText = todoListHtml;
}
function add() {
   const inputElement = document.querySelector('#input-todo')
   const name = inputElement.value
   todoList.push(name)
   console.log(todoList)


   
   inputElement.value = '';

   renderTodo();
}


