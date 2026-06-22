window.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        window.location.href = "/pages/slide-2.html"
    }
}
)

const points = [
    "The pretty/ugly side (we see)",
    "Provides information in some way e.g visual, audio",
    "Provides a way for user to interact with the website",
    "Takes information from user for specific actions",
    "All in all, its the face of the website that impresses user with animations and cool stuff to make it more appealing!"
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
        window.removeEventListener("click", addPoints)
    }
}

window.addEventListener("click", addPoints)
