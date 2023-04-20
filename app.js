const display = document .querySelector('.display')
const controlbuttons = document.querySelector('.control').children
const allsymbols = ['+', '-', 'x', '%', 'c','=',]

let firstValue = ''
let secondValue = ''
let symbol =''
let result = ''

const calculate = () =>{
  firstValue = parseFloat(firstValue)
  secondValue = parseFloat(secondValue)

  if (symbol === '+') result = firstValue + secondValue
  if (symbol === '-') result = firstValue - secondValue
  if (symbol === 'x') result = firstValue * secondValue
  // if (symbol === '+') result = firstValue / secondValue
  if (symbol === '%') result = firstValue % secondValue
  

  display.innerText = result
  firstValue = result
  secondValue = ''
}

for (let button of controlbuttons){
  button.addEventListener('click',()=>{
    const {innerText: btnvalue} = button
    const btnValueIsymbol = allsymbols.includes(btnvalue)

    if (!secondValue && btnvalue === '=') return null

    if (btnvalue === 'c'){
      firstValue =  secondValue = symbol = ''
      return display.innerText = ''
    }

    if (firstValue && btnValueIsymbol){
      secondValue && calculate()
      symbol = btnvalue
    } 

    else if (!symbol) firstValue += btnvalue
    else if (symbol) secondValue += btnvalue

    if (btnvalue !== '=') display.innerText += btnvalue
  })
}


