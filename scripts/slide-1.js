window.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        window.location.href = "/pages/slide-2.html"
    }
}
)

const points = [
    "Shows some form of Content i.e video, images, paragraph of texts.",
    "Has fields to fill in i.e email, phone no. or buttons to click.",
    "Has animation and transitions to look more appealing.",
    "Responsible for the behavior of buttons, dropdown menus and more.",
    "The pretty/ugly website visible to us.",
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
    if (event.key === "ArrowRight") {
        addPoints()
        addImgs()
     }
})


const canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")

function resizeCanvas() {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    drawPattern()
}

function drawPattern() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(255,255,255,0.8)"

    const circles = []
    const gap = 40
    const count = 50

    for (let i = 0; i < count; i++) {
        const radius = Math.floor(Math.random() * (75 - 25 + 1)) + 25
        let x
        let y
        let attempts = 0

        do {
            x = radius + Math.random() * (canvas.width - radius * 2)
            y = radius + Math.random() * (canvas.height - radius * 2)
            attempts += 1
        } while (isTooClose(x, y, radius, circles, gap) && attempts < 100)

        circles.push({ x, y, radius })
    }

    for (const circle of circles) {
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.stroke()
    }
}

function isTooClose(x, y, radius, circles, gap) {
    return circles.some((circle) => {
        const dx = x - circle.x
        const dy = y - circle.y
        const distance = Math.hypot(dx, dy)
        return distance < radius + circle.radius + gap
    })
}

window.addEventListener("resize", resizeCanvas)
resizeCanvas()


const imgs = [
    {
        class: "img img-1",
        src: "/public/images/website-content.avif"
    },
    {
        class: "img img-2",
        src: "/public/images/form.png"
    },
    {
        class: "img img-3",
        src: "/public/images/animation.mp4"
    },    
    {
        class: "img img-4",
        src: "/public/images/site.jpg"
    },    
]
const body = document.querySelector("body")
let index = 0
function addImgs() {
    if (index === 2) {
        const mask = document.createElement("div")
        mask.classList = "video-mask img"

        const video = document.createElement("video")
        video.classList = imgs[index].class
        video.src = imgs[index].src
        video.autoplay = 1
        video.muted = 1
        video.loop = 1

        mask.appendChild(video)
        body.appendChild(mask)

        index++
    } else {
        const img = document.createElement("img")
        img.classList = imgs[index].class
        img.src = imgs[index].src

        body.appendChild(img)
        index++
    }
}