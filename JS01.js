// let num = 42;
// let firstName = 'Andrew'
// const isProgrammer = true

/*can Do

let $ = 'test'
let $num = 42
let num$ = 42
let _ = 42
let _num = 42
let num_ = 42
let first_name = 'Egor' //bad
let myNum = 'Egor' //good
let num42 = 42
*/

/*Restricted
let 42num = 42 
let my-num = 1
let const =
*/


// alert (firstName)
// console.log (num + 10)
// console.log (num - 10)
// console.log (num * 10)
// console.log (num / 10)
// console.log (num)

// let num2 = num + 10
// console.log (num, num2)
// num = num2 - num
// console.log (num, num2)
// num2 = num2 + 1
// console.log (num, num2)

// const fullName = firstName + 'Sizimov'
// console.log(fullName);

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
let action = '+'
let action1 = '*'

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    }
        else {
            resultElement.style.color = 'green' 
        }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol)  {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2}
    if (actionSymbol == '-') {
        return num1 - num2}
    if (actionSymbol == '*') {
        return num1 * num2} 
    if (actionSymbol == '/') {
        return num1 / num2}
    

}


plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
multiplyBtn.onclick = function () {
    action = '*'
}
divideBtn.onclick = function () {
    action = '/'
}
submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult (result)
    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult (sum)
    // }   else if (action == '-') {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult (sum)  

    // }

}


// console.log (typeof sum)
// console.log(resultElement.textContent);
// resultElement.textContent = 42

