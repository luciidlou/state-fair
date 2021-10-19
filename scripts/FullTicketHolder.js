const rideTarget = document.querySelector(".rides")
const foodTarget = document.querySelector(".food")
const gameTarget = document.querySelector(".games")
const sideshowTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const FullTicketHolders = () => {
    eventHub.addEventListener("fullTicketPurchased", () => {
            rideTarget.innerHTML += `<div class="bigSpender person"></div>`
            foodTarget.innerHTML += `<div class="bigSpender person"></div>`
            gameTarget.innerHTML += `<div class="bigSpender person"></div>`
            sideshowTarget.innerHTML += `<div class="bigSpender person"></div>`
    })
}