

export const NoteHTMLConverter = (noteObject, criminalObject) => {
    console.log(criminalObject)
    console.log(noteObject)
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


// -- 