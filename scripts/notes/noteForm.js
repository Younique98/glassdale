import { getCriminals, useCriminals } from "../criminal/CriminalProvider.js"
import { saveNote } from "./NoteDataProvider.js" 



const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
    // Trigger fetching the API data and loading it into application state
    getCriminals()
        .then(() => {
           
            const criminalsArray = useCriminals()
            render(criminalsArray)
        })
}

const render = (criminalsArray) => {
    
    contentTarget.innerHTML = `
    
    <form class="criminalFormBox" action="">
    <h2>Notes about criminals</h2>
    <fieldset>
      <label for="note-criminalId">Suspect: </label>
      <select name="note-criminalId" id="note-criminalId">
      <option value="0">Please select a criminal...</option>
      ${criminalsArray.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join("")
    }
    </select>
      <label for="note-author">Author: </label>
      <input type="text" id="note-author">
      <label for="note-date">Date: </label>
      <input type="date" id="note-date">
      <label for="note-intuition">Intuition: </label>
      <input type="text" id="note-intuition">
      <label for="note-text">Note: </label>
      <input type="text" id="note-text">
      <button id="saveNote">Save Note</button>
    </form>
    `
}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        clickEvent.preventDefault()
        
        const criminalId = document.getElementById("note-criminalId").value
        const author = document.getElementById("note-author").value
        const date = document.getElementById("note-date").value
        const intuition = document.getElementById("note-intuition").value
        const text = document.getElementById("note-text").value
        // Make a new object representation of a note
       
        const newNote = {
            // Key/value pairs here
                "text": text,
                "criminalId": parseInt(criminalId),
                "date": date,
                "author": author,
                "intuition": intuition
                
                
                
                
              
        }

        // Change API state and application state
        saveNote(newNote)
        // NoteList()
    }
})

