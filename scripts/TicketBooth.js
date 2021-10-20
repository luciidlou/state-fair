// In the TicketBooth.js component, add the following button as a child of the ticket booth <div>

// Add a click event listener on the content target element reference. Some starter code below.

// In the body of the event listener callback function, check if the user clicked on the Ride Ticket button.

// If so, create a custom event that describes what happened. For example:

// Dispatch that event to the event hub.

// Import and invoke the TicketBooth component function in main.js.





const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

let ticketCount = 0

// RIDE TICKET FUNCTION
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
        ticketCount += 1
        TicketBooth() // THE STATE OF THE VARIABLE ticketCount CHANGES WITH EACH CLICK EVENT SO WE NEED TO RECALL THE FUNCTION ticketBooth IN ORDER TO REWRITE THE HTML FOR THAT SECTION
    }
})

// FOOD TICKET FUNCTION
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
        ticketCount += 1
        TicketBooth() // THE STATE OF THE VARIABLE ticketCount CHANGES WITH EACH CLICK EVENT SO WE NEED TO RECALL THE FUNCTION ticketBooth IN ORDER TO REWRITE THE HTML FOR THAT SECTION
    }
})

// GAME TICKET FUNCTION
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
        ticketCount += 1
        TicketBooth() // THE STATE OF THE VARIABLE ticketCount CHANGES WITH EACH CLICK EVENT SO WE NEED TO RECALL THE FUNCTION ticketBooth IN ORDER TO REWRITE THE HTML FOR THAT SECTION
    }
})

// SIDESHOW TICKET FUNCTION
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
        ticketCount += 1
        TicketBooth() // THE STATE OF THE VARIABLE ticketCount CHANGES WITH EACH CLICK EVENT SO WE NEED TO RECALL THE FUNCTION ticketBooth IN ORDER TO REWRITE THE HTML FOR THAT SECTION
    }
})

// FULL PACKAGE TICKET FUNCTION
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "fullTicket") {
        const fullTicketEvent = new CustomEvent("fullTicketPurchased")
        eventHub.dispatchEvent(fullTicketEvent)
        ticketCount += 1
        TicketBooth() // THE STATE OF THE VARIABLE ticketCount CHANGES WITH EACH CLICK EVENT SO WE NEED TO RECALL THE FUNCTION ticketBooth IN ORDER TO REWRITE THE HTML FOR THAT SECTION
    }
})
// TICKET BOOTH HTML BUTTONS
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <div>Total tickets purchased: ${ticketCount}</div>
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullTicket">Full Package Ticket</button>
        </div>
    `
}


