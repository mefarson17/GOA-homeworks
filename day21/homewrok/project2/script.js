const images = [
    "WALL1.avif",
    "https://images.unsplash.com/photo-1695148831663-4c7279921f06?q=80&w=1170",
    "https://images.unsplash.com/photo-1685427387179-861442eb8501?q=80&w=1170",
    "https://images.unsplash.com/photo-1648409331285-e29e1b47cdd8?q=80&w=1074",
    "https://images.unsplash.com/photo-1622998182589-f74aa3835777?q=80&w=1074"
]

const backg = document.getElementById("back")
const next = document.getElementById("next")
const prev = document.getElementById("prev")
let index = 0

// პირველი სურათის ჩვენება დასაწყისში
backg.style.backgroundImage = `url('${images[index]}')`

const slideShowNext = () => {
    index++
    if (index >= images.length) {
        index = 0
    }
    backg.style.backgroundImage = `url('${images[index]}')`
}

const slideShowPrev = () => {
    index--
    if (index < 0) {
        index = images.length - 1
    }
    backg.style.backgroundImage = `url('${images[index]}')`
}

next.onclick = slideShowNext
prev.onclick = slideShowPrev