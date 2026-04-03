

let b1 = document.getElementById('box1')
let b2 = document.getElementById('box2')
let b3 = document.getElementById('box3')
let b4 = document.getElementById('box4')
let btn = document.getElementById('btn')
let body = document.body


b1.addEventListener('click' , function() {
    body.style.backgroundColor = 'green'
})
b2.addEventListener('click' , function() {
    body.style.backgroundColor = 'red'
})
b3.addEventListener('click' , function() {
    body.style.backgroundColor = 'blue'
})



b4.addEventListener('click' , function() {

    let num1 = Math.floor(Math.random() * 255)
    let num2 = Math.floor(Math.random() * 255)
    let num3 = Math.floor(Math.random() * 255)
    let num4 = Number((Math.random() * 1.1 ).toFixed(1))
    
    body.style.backgroundColor = (`rgba(${num1} , ${num2} , ${num3} , ${num4})`)
})

btn.addEventListener('click' , function() {
    body.style.backgroundColor = '#222'
})


