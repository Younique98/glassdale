import { ConvictionProvider, useConvictions } from "./convictionProvider.js"
import { Conviction } from "./convictions.js"

const convictionsContainer = document.querySelector(".convictionsContainer")





export const ConvictionList = () => {

    
    ConvictionProvider()
    .then(() => {
    const convictions = useConvictions()
    const fullNames = convictions.map(
        personObject => {
            const valueToBeInNewArray = personObject.name
            return valueToBeInNewArray
        }
    )
    console.log(fullNames)
    
    
    // Generate all of the HTML for all of the convictions
    let convictionHTMLRepresentations = ""

    for (const conviction of convictions) {
        convictionHTMLRepresentations += Conviction(conviction)
        /*
            Invoke the conviction component function
            and pass the current conviction object as an argument.
            Each time, add the return value to the
            convictionHTMLRepresentations variable with `+=`
        */

           // Add a section, and all of the convictions to the DOM 
       

     
}
 

 convictionsContainer.innerHTML =`
 
 <h2>Glassdale convictions</h2>
 <h3>Please select a crime</h3>
 <select>
 ${
    convictions.map(convictionObject => {
        const fullConviction = convictionObject.name
        return `<option>${fullConviction}</option>`
    })
}
 
 </select>
 `
    
})
}

   

{/* <section class="convictionsList">
     ${convictionHTMLRepresentations}
 </section> */}