import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteContainer")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

//----This may break, i added customEvent inside of NoteList at line
eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
        return NoteHTMLConverter(noteObject)
    }).join("")
        // convert the notes objects to HTML with NoteHTMLConverter

    
    contentTarget.innerHtml = `
    <h3>Case Notes</h3>
    <section class="noteslist">
    ${allNotesConvertedToStrings}
    </section>
    `

}

export const NoteList = () => {
getNotes()
.then(() => {
    const allNotes = useNotes()
    render(allNotes)
    })
}

// eventHub.addEventListener("noteStateChanged", event => {
//    if (contentTarget.innerHtml !== "") {
//        NoteList()
//    }
// })

        


    