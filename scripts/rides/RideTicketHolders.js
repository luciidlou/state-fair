// Open the RideTicketHolder component file.

// Add an event listener to the event hub that listens for the custom event that you dispatched from the TicketBooth component.

// In the body of the event listener callback function, add a new <div> element to the content target that has the correct classes on it (see above).


const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", () => {
            contentTarget.innerHTML += `<div class="rider person"></div>`
    })
}

