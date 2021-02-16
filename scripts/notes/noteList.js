import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./note.js";
import { getCriminals, useCriminals } from "../criminal/CriminalProvider.js";

// Query the DOM for the element that your notes will be added to
const contentTarget = document.querySelector(".notesContainer");
//Define eventhub
const eventHub = document.querySelector(".container");

let allNotes = []
let allCriminals = []

//----This may break, i added customEvent inside of NoteList at line
eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
  })
  

const render = () => {
  // having issues mapping over an object as noteArray is showing [object, object]
  const allNotesConvertedToStrings = allNotes.map(noteObject => {
    const relatedCriminalObject = allCriminals.find(criminal => criminal.id === noteObject.criminalId)
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
      allNotes = useNotes();
      allCriminals = useCriminals();
      render()
    })
}

eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
      NoteList()
    }
  })

// --- Event Listener to event hub that captures any delete button click
