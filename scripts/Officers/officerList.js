import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { Officer } from "./officers.js"

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {

    
    getOfficers()
    .then(() => {
    const officers = useOfficers()

    
    
    // Generate all of the HTML for all of the officers
    let officerHTMLRepresentations = ""

    for (const officer of officers) {
        officerHTMLRepresentations += Officer(officer)
        /*
            Invoke the officer component function
            and pass the current officer object as an argument.
            Each time, add the return value to the
            officerHTMLRepresentations variable with `+=`
        */

           // Add a section, and all of the officers to the DOM 
       

     
}
 

 officersContainer.innerHTML =`
 <h3>GlassdaleOfficers</h3>
 <section class="officersList">
     ${officerHTMLRepresentations}
 </section>`

})
}

   

