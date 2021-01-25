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