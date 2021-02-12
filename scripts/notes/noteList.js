import { getNotes, useNotes, deleteNote  } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./note.js";
import {getCriminals, useCriminals} from "../criminal/CriminalProvider.js"

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteButton")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

//----This may break, i added customEvent inside of NoteList at line
eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})


const render = (noteArray, criminalArray) => {
    console.log(criminalArray)
    // having issues mapping over an object as noteArray is showing [object, object]
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
    const criminalObject = criminalArray.find(criminal => {
        
       return criminal.id === noteObject.criminalId
        
    })
        return NoteHTMLConverter(noteObject, criminalObject)
      
      }).join("")
    
        // convert the notes objects to HTML with NoteHTMLConverter
    contentTarget.innerHTML = `
    <h3>Case Notes</h3>
    <section class="noteslist">
    ${allNotesConvertedToStrings}
    </section>
    
    `

}

export const NoteList = () => {

getNotes()

.then(getCriminals)
.then(() => {
    const allNotes = useNotes()
    console.log(allNotes)
    const allCriminals = useCriminals()
    console.log(allCriminals)
    render(allNotes, allCriminals)
    })
    
    
    
}

eventHub.addEventListener("noteStateChanged", event => {
   if (contentTarget.innerHtml !== "") {
       NoteList()
   }
})

        
// --- Event Listener to event hub that captures any delete button click

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
            
        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})