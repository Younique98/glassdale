import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./criminals.js"

const criminalContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

    getCriminals()
        .then(() => {
            const criminals = useCriminals()

            // Generate all of the HTML for the criminals
            let criminalHTMLRepresentation = ""

            for (const criminal of criminals) {
                criminalHTMLRepresentation += Criminal(criminal)

            }
            criminalContainer.innerHTML = `
            <h3>Glassdale Criminals</h3>
            <section class="criminalsList">
            ${criminalHTMLRepresentation}
            </section>`
        })
    
}

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {

    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
       const criminalsArray = useCriminals()
       debugger
        const matchingCriminals =criminalsArray.filter(crimeThatWasChosen)

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

const render = criminalCollection => {
    contentTarget.innerHTML = criminalCollection
}


// // Render ALL criminals initally
// export const CriminalList = () => {
//     getCriminals()
//         .then(() => {
//             const appStateCriminals = useCriminals()
//             render(appStateCriminals)
//         })
// }