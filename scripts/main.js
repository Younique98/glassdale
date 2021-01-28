console.log("Hello World")

import { OfficerList } from './Officers/officerList.js'
OfficerList()

import {CriminalList} from './criminal/criminalList.js'
CriminalList()

import { ConvictionSelect } from './convictions/ConvictionSelect.js'
ConvictionSelect()

import { OfficerSelect } from './Officers/OfficersSelect.js'
import { saveNote } from './notes/NoteDataProvider.js'

OfficerSelect()

//Testing saveNote()
// const newNote = {
//     "text": "It's probably Bran pt 3",
//     "suspect": "Bryan",
//     "date": "01/28/2021",
//     "author": "scott",
//     "intuition": "super suspiciuos"
// }
// saveNote(newNote)
import { NoteForm} from './notes/noteForm.js'
NoteForm()

import { ShowNoteButton } from './notes/ShowNotesButton.js'
ShowNoteButton()