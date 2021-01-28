/*
 *   OfficerSelect component that renders a select HTML element
 *   which lists all Officers in the Glassdale PD API
 */
import { useOfficers, getOfficers } from "./OfficerProvider.js"

/*
Which element in your HTML contains all components?
That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officer")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", changeEvent => {
    console.log(changeEvent)
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value
        

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})
export const OfficerSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getOfficers()
        .then(() => {
            // Get all Officers from application state
            const Officers = useOfficers()
            render(Officers)
        })
}

const render = OfficersCollection => {
    

    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select a officer...</option>
            ${OfficersCollection.map(officer => `<option value="${officer.name}">${officer.name}</option>`).join("")
        
        }
        </select>
    `
}
