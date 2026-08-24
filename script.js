function createCard(Image, Url) {
    const newCardImage = document.createElement('img')
    newCardImage.src = "Assets/" + Image
    const Anchor = document.createElement('a')
    Anchor.href = Url
    Anchor.appendChild(newCardImage)
    Anchor.className = "card"
    document.getElementById("HubDiv").appendChild(Anchor)
    var Boundaries = Anchor.getBoundingClientRect()
    //Fixed Github Pages asset download delay causing bad calulations
    newCardImage.addEventListener('load', () => {
    Boundaries = Anchor.getBoundingClientRect()
    })
    //Logic
    Anchor.addEventListener('mousemove', (e) => {
        var relativeX = ((e.clientX - Boundaries.left) / Boundaries.width - 0.5) * -20
        var relativeY = ((e.clientY - Boundaries.top) / Boundaries.height - 0.5) * 20
        newCardImage.style.transform = `rotateX(${relativeY}deg) rotateY(${relativeX}deg)`
    })

    Anchor.addEventListener('mouseleave', (e) => {
        newCardImage.style.removeProperty('transform')
    })
}

createCard("Typescript-logo.png", "Tycoon");
