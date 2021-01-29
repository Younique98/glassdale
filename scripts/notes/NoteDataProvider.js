let notes = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const  useNotes = () => notes.slice()

// export const saveNote = notes => {

//     return fetch('http://localhost:8088/notes', {
//         method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(notes)
    
//   })
 
//     .then(() => getNotes())
//     .then(dispatchStateChangeEvent)
// }

export const saveNote = notes => {
    let stringifiedObj = JSON.stringify(notes)
    
    
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getNotes) // fetch the notes collection containing the newly added note
    .then(dispatchStateChangeEvent) // tell any component listening that the notes state has been updated
}