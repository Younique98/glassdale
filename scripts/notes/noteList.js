import { getNotes, useNotes } from "./NoteDataProvider.js";
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
    console.log(noteArray)
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
    const relatedCriminalObject = criminalArray.find(criminal => criminal.id === noteObject.criminalId)
        return NoteHTMLConverter(noteObject, relatedCriminalObject)
      
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
    const allCriminals = useCriminals()
    render(allNotes, allCriminals)
    })
    
}

eventHub.addEventListener("noteStateChanged", event => {
   if (contentTarget.innerHtml !== "") {
       NoteList()
   }
})

        


    