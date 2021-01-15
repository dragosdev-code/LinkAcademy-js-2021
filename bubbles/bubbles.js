var numerOfBubbles = 100

for (let i = 0; i < numerOfBubbles; i++) {
    newBubble()
}

function newBubble() {
    let bubble = document.createElement("div")
    bubble.classList.add("bubble")
    let x = randomNumber(100)
    let delay = randomNumber(5000)
    bubble.style.left = x + "vw"
    bubble.style.animationDelay = delay + "ms"
    document.querySelector("body").appendChild(bubble)
}

function randomNumber(max){
    return Math.floor(Math.random() * max)
}