window.addEventListener("click", () => {
    window.location.href = "/pages/slide-1.html"
}
)

const canvas = document.querySelector(".grid-background")
const pen = canvas.getContext("2d")

function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    drawGrid()
}
function drawGrid(){
    const gap = 24
    pen.clearRect(0, 0, canvas.width, canvas.height)
    pen.strokeStyle = "rgba(255,255,255,0.8)"
    pen.lineWidth = 1
    
    
    for (let x = 0; x <= canvas.width; x += gap) {
        pen.beginPath()
        pen.moveTo(x, 0)
        pen.lineTo(x, canvas.height)
        pen.stroke()
    }

    for (let y = 0; y <= canvas.height; y += gap) {
        pen.beginPath()
        pen.moveTo(0, y)
        pen.lineTo(canvas.width, y)
        pen.stroke()
    }
}

window.addEventListener("resize", resizeCanvas)
resizeCanvas()


