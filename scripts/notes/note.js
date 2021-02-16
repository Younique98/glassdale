
import { useNotes, deleteNote } from "./NoteDataProvider.js";
import { useCriminals } from "../criminal/CriminalProvider.js";

const eventHub = document.querySelector(".container")

export const NoteHTMLConverter = (noteObject, criminalObject) => {
    // console.log(criminalObject)
    // console.log(noteObject)
    return `
    <section class="note">
        <div class="note__text">${noteObject.text}</div>
        <div class="note__suspect">Title: ${criminalObject.name}</div>
        <div class="note__author">Author: ${noteObject.author}</div>
        <div class="note__date">Date: ${new Date(noteObject.date).toLocaleDateString('en-US')}</div>
        <div class="note__date">Intuition: ${noteObject.intuition}</div>
        <button id="deleteNote--${noteObject.id}">Delete</button>
    </section>
`

}


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
      clickEvent.preventDefault();
      const [prefix, id] = clickEvent.target.id.split("--");
  
      /*
              Invoke the function that performs the delete operation.
  
              Once the operation is complete you should THEN invoke
              useNotes() and render the note list again.
          */
      deleteNote(id)
      
      .then(() => {
        const updatedNotes = useNotes();
        const criminals = useCriminals();
        render(updatedNotes, criminals);
      });
    }
  });
  