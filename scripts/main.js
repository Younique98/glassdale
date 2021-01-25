console.log("Hello World")
import { Officer } from './Officers/officers.js'
import { useOfficers } from './Officers/OfficerProvider.js'
import { OfficerList } from './Officers/officerList.js'


// const allTheOfficers = useOfficers()
// for (const officer of allTheOfficers) {
//     console.log(officer)
// };


OfficerList()

import {Criminal} from './criminal/criminals.js'
import {useCriminals} from './criminal/CriminalProvider.js'
import {CriminalList} from './criminal/criminalList.js'

CriminalList()



import { ConvictionSelect } from './convictions/ConvictionSelect.js'
ConvictionSelect()

// import { convictionsCollection} from './convictions/ConvictionSelect.js'
// convictionsCollection ()