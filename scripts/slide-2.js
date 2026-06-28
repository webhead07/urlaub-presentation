window.addEventListener("keydown", (event) => {
    if(event.key === " ")
    window.location.href = "/pages/animation.html"
}
)

const points = [
    "Connects the frontend of website to the servers.",
    "Servers provide the images, videos or texts that we see on the website.",
    "Processes the data we enter in fields i.e email, passwords, preferences.",
    "Responsible for saving new data or changes in data i.e updating passwords, adding phone number."
]
const ul = document.querySelector("ul")
let count = 0

function addPoints() {
    const li = document.createElement("li")
    if (count <= points.length - 1) {
        li.textContent = points[count]
        ul.appendChild(li)
        count += 1
    }

    if (count >= points.length) {
        window.removeEventListener("keydown", addPoints)
    }
}

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight")
        addPoints()
        addImgs()
})


const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")



function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    drawPattern()
}

function drawPattern() {
    ctx.strokeStyle = "#ffffff"
    ctx.lineWidth = 3

    const rects = []
    const gap = 40;
    const count = 50;


    for (let i = 1; i <= count; i++) {
        const width = Math.floor(Math.random() * (250 - 50) + 50)
        const height = Math.floor(Math.random() * (100 - 25) + 25)

        let x
        let y
        let attempts = 0;

        do {
            x = Math.floor(Math.random() * (canvas.width - width + 1))
            y = Math.floor(Math.random() * (canvas.height - height + 1))
            attempts += 1;
        } while (isTooClose(x, y, width, height, rects, gap) && attempts < 100)
    
        rects.push({ x, y, width, height })
    }

        for (const rect of rects){
            ctx.beginPath()
            ctx.rect(rect.x, rect.y, rect.width, rect.height)
            ctx.stroke()
        }
}
    
function isTooClose(x, y, width, height, rects, gap) {
    return rects.some((rect) => {
        const dx = x - rect.x
        const dy = y - rect.y
        const dWidth = width - rect.width
        const dHeight = height - rect.height
        const distance = Math.hypot(dx, dy, dWidth, dHeight)
        return (distance < width + rect.width + gap)
    })
}

window.addEventListener("resize", resizeCanvas)
resizeCanvas()


const imgs = [
    {
        class: "img-1",
        src: "/public/images/backend.png"
    },
    {
        class: "img-2",
        src: "/public/images/clientServer.jpg"
    },
    {
        class: "img-3",
        src: "/public/images/process.png"
    },
    
]
let index = 0
const body = document.querySelector("body")
function addImgs() {
    const img = document.createElement("img")
    img.classList = imgs[index].class
    img.src = imgs[index].src

    index++

    body.appendChild(img)
}