
import { useCriminals } from "../criminal/CriminalProvider.js"
import { KnownAssociate } from "../KnownAssociates/theAssociate.js"
import { ShowAssociatesButton } from "../KnownAssociates/KnownAssociateButton.js"


// Query the DOM for the element that your notes will be added to 
const associateContainer = document.querySelector(".criminalsAssociates")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")


// ---- Error: Cannot read property "name" of undefined. my criminalObj is showing empty at line 15

export const AssociatesofCriminal = (criminalObj) => {
    const AssociateHTMLRepresentations = `
    <div id="alibi" class="alibi--associate">
    <div class="alibi--placement">
    <h1>Alibi for ${criminalObj.name}</h1>
    ${criminalObj.known_associates.map(alibi => {
        return `<section class="associate__container">
        <div class="associate__name">${alibi.name}</div>
        <div class="associate__alibi">Alibi: ${alibi.alibi}</div>
        </section>`

    }).join("")}
    <button id=alibi--close">close</button>
        </div>
    </div>
    `

    associateContainer.innerHtml = AssociateHTMLRepresentations
}



//----This may break, i added customEvent inside of NoteList at line
eventHub.addEventListener("showAssociatesClicked", customEvent => {
    const clickedAssociatesId = customEvent.detail.criminalIdTaco
    // console.log(clickedAssociatesId, "detail")
    const arrayOfCriminals = useCriminals()
    //useCriminals() is an array but also knownAssociates is too
    const chosenCriminal = arrayOfCriminals.find((criminalObjectTaco) => criminalObjectTaco.id === clickedAssociatesId)
    
    AssociatesofCriminal(chosenCriminal)
    })
    

    eventHub.addEventListener("click", event => {
        if (event.target.id === "alibi--close") {
            closeWindow()
        }
    })
    
    const closeWindow = () => {
        contentContainer.innerHTML = ""
    }
    