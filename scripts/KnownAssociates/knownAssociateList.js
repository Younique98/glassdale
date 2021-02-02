
import { useCriminals } from "../criminal/CriminalProvider.js"
import { KnownAssociate } from "../KnownAssociates/theAssociate.js"
import { ShowAssociatesButton } from "../KnownAssociates/KnownAssociateButton.js"
// Query the DOM for the element that your notes will be added to 
const associateContainer = document.querySelector(".criminalsAssociate")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

//----This may break, i added customEvent inside of NoteList at line
eventHub.addEventListener("showAssociatesClicked", customEvent => {
    const clickedAssociatesId = customEvent.detail.criminalIdTaco
    // console.log(clickedAssociatesId, "detail")
    const knownAssociates = useCriminals()
    //useCriminals() is an array but also knownAssociates is too
    const associates = knownAssociates.find(criminalObjectTaco => {
        //find method returns 
        return criminalObjectTaco.id === parseInt(clickedAssociatesId)
    })
    // console.log(KnownAssociate)
    
   renderToDom(associates)
   //associates is from line 16 and pulls in the obj from being looped over in line 16 and the find method returns the first thing that happens to be an object within there. looks at the website if you need to
})

// use line 15 "associates " to create a render function and return a object using innerHtml and pass  associates through it


const renderToDom = (associate) => {
// on container take the KnownAssociate function and put the taco associate in there
       associateContainer.innerHTML += KnownAssociate(associate)
         
}
    