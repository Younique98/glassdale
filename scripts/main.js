import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { CriminalList } from "./criminal/criminalList.js";
import { NoteForm } from "./notes/noteForm.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import { OfficerList } from "./Officers/officerList.js";
import { OfficerSelect } from "./Officers/OfficersSelect.js"
import "./notes/NoteList.js"
import { ShowAssociatesButton } from "./KnownAssociates/KnownAssociateButton.js";
import "./KnownAssociates/KnownAssociateList.js"
import { useFacilities } from "./facility/FacilityProvider.js"
import { DisplayFacilitiesButton } from "./facility/DisplayFacilitiesButton.js"
import { FacilityList } from "./facility/FacilityList.js";

OfficerList()
CriminalList()
FacilityList()
ConvictionSelect()
OfficerSelect()
NoteForm()
ShowNoteButton()
ShowAssociatesButton()
useFacilities()
DisplayFacilitiesButton()