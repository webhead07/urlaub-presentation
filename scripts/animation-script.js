const canvas = document.querySelector("#canvas")

const context = canvas.getContext("2d")

let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

canvas.width = windowWidth
canvas.height = windowHeight

const fontSize = 16;

let columns = Math.floor(windowWidth / fontSize)

let drops = []
for (let i = 0; i < columns; i++){
    drops.push(0)
}

const allowedChars = "abcdefghijklmnopqrstuvwxyzäöüẞ0123456789"

function draw() {
    context.fillStyle = "rgba(0,0,0,0.05)"
    context.fillRect(0, 0, windowWidth, windowHeight)
    
    context.fontSize = "700 " + fontSize + "px"

    context.fillStyle = "#00cc33"

    for (let i = 0; i < columns; i++){
        let index = Math.floor(Math.random() * allowedChars.length)
        
        let x_axis = i * fontSize;
        let y_axis = drops[i] * fontSize

        context.fillText(allowedChars[index], x_axis, y_axis)
        
        if (y_axis >= canvas.height && Math.random() > 0.99) {
            drops[i] = 0
        }
        drops[i]++
    }
}
    draw()
    setInterval(draw,36)
// const button = document.querySelector("button")
// button.addEventListener("click", ()=>{
//     draw()
//     setInterval(draw,36)
// })




