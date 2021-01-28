import { saveNote } from "./NoteDataProvider.js" 

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <label htmlFor="note-suspect">Suspect</label>
        <input type="text" id="note-suspect">
        <label htmlFor="note-text">Author</label>
        <input type="text" id="note-author">
        <label htmlFor="note-intuition">Intuition</label>
        <input type="text" id="note-intuition">
        <label htmlFor="note-text">Note</label>
        <input type="text" id="note-text">
        <label htmlFor="note-date">Date</label>
        <input type="text" id="note-date">

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
            const suspect = document.getElementById("note-suspect").value
            const author = document.getElementById("note-author").value
            const date = document.getElementById("note-date").value
            const intuition = document.getElementById("note-intuition").value
            const text = document.getElementById("note-text").value
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            
                "text": text,
                "suspect" : suspect,
                "date": date,
                "author": author,
                "intuition": intuition
                
              
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

// const NoteForm = () => {
//     // rest of the code here
// }