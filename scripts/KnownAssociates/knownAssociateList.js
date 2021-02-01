
import { KnownAssociate } from "../KnownAssociates/theAssociate.js"

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".criminalAssociate")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

//----This may break, i added customEvent inside of NoteList at line
eventHub.addEventListener("showAssociatesClicked", customEvent => {
    console.log("yikes")
})


const render = (criminalAssociateArray) => {
    const allAssociatesConvertedToStrings = criminalAssociateArray.map(criminalAssociateObject =>  KnownAssociate(criminalAssociateObject)).join("")
    
    
        // convert the notes objects to HTML with NoteHTMLConverter

    
    contentTarget.innerHTML = `
    <h3>Known Associates</h3>
    <section class="criminalAssociateList">
    ${allAssociatesConvertedToStrings.name},
    ${allAssociatesConvertedToStrings.alibi}
    </section>
    `

}

// export const KnownAssociateList = () => {
// .then(() => {
//     const allAssociates = useCriminals()
//     render(allAssociates)
//     })
    
// }

        


    