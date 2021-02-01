
import { useCriminals } from "../criminal/CriminalProvider.js"
import { KnownAssociate } from "../KnownAssociates/theAssociate.js"

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".criminalAssociate")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

//----This may break, i added customEvent inside of NoteList at line
eventHub.addEventListener("showAssociatesClicked", customEvent => {
    const clickedAssociatesId = customEvent.detail.criminalIdTaco
    console.log(clickedAssociatesId, "detail")
    const knownAssociates = useCriminals()
    const associates = knownAssociates.find(criminalObjectTaco => {
        return criminalObjectTaco.id === parseInt(clickedAssociatesId)
    })
    console.log(KnownAssociate)
    console.log(associates)
   
    
  

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

        


// let KnownAssociateHTMLRepresentation = ""
// KnownAssociateHTMLRepresentation.innerHTML =  `
// <h3>Known Associates</h3>
// <p class="criminal__knownAssociate"> Known Associate: ${criminal.known_associates[0].name}    </p>
// //     <p class="criminal__alibis"> Alibis Provided: ${criminal.known_associates[0].alibi}    </p>
// <section class="criminalAssociateList">
// ${allAssociatesConvertedToStrings.name},
// ${allAssociatesConvertedToStrings.alibi}
// console.log("yikes")
// </section>`
// return KnownAssociateHTMLRepresentation