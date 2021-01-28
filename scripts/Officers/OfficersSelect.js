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
    // Only do this if the `officerSelect` element was changed
    if (changeEvent.target.id === "officerSelect") {
        //Get the name of the selected Officer
        const selectedOfficer = changeEvent.target.value
        // debugger
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch to event hub
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
            ${OfficersCollection.map(officer => `<option value="${officer.id}">${officer.name}</option>`).join("")
        
        }
        </select>
    `
}

// ------- Function to write dependency on selection of first drop down ----

// const drop__parent = document.getElementById("criminalSelect")
const drop__child = document.getElementById("officerSelect");

const drop__parent = document.querySelector('.container')
// for (key in OfficerSelect) {
//     drop__parent.innerHTML = drop__parent.innerHTML + '<option>' + key + '</option>';

// }

// adding eventListener to parent select so that user selections an option and child gets populated

drop__parent.addEventListener("change", event => {
    if (event.target.id === "officerSelect") {
        // debugger
        
    // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})






        //---- trying to fix error --- do not delete
//         for (i = 0; i < parsedCriminals[item].length; i++) {
//             drop__child.innerHTML = drop__child.innerHTML + '<option>' + parsedCriminals[item][i] + '</option>';
//         }
//         // drop__parent.dispatchEvent(customEvents)
//     }
// })