import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./criminals.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getFacilities, useFacilities  } from "../facility/FacilityProvider.js"
import {getCriminalFacilities, useCriminalFacilities} from "../facility/CriminalFacilityProvider.js"

const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer")
const contentTarget = document.querySelector(".criminalsFacilityContainer")


export const CriminalList = () => {
  // Kick off the fetching of both collections of data
  getFacilities()
      .then(getCriminalFacilities)
      .then(getCriminals)
      .then(
          () => {
              // Pull in the data now that it has been fetched
              const facilities = useFacilities()
              const crimFac = useCriminalFacilities()
              const criminals = useCriminals()

              // Pass all three collections of data to render()
              render(criminals, facilities, crimFac)
          }
      )
}
const renderToDom = (criminalCollection) => {
  let criminalsHTMLRepresentations = ""

  for (const criminal of criminalCollection) {
    criminalsHTMLRepresentations += Criminal(criminal)
  }

  criminalsContainer.innerHTML = `
        <h3>Criminals</h3>
        <section class="criminalsList">
        ${criminalsHTMLRepresentations}
        </section>
        `
}


// Listen for the "crimeChosen" custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
  //console.log(event)
  if (event.detail.crimeThatWasChosen !== "0") {
    /* 
      We have the the id of the conviction that the user selected from the drop down (event.target.crimeThatWasChosen). But each criminal object has the name of the crime they were convicted for. So we need to get the name of the conviction associated with the unique identifier. To get the name, we get the conviction object which has the property for name. 
    */

    // Get a copy of the array of convictions from the data provider
    const convictionsArray = useConvictions()

    // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
    const convictionThatWasChosen = convictionsArray.find(convictionObj => {
      //console.log(convictionObj)
      return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
    })

     // console.log(convictionThatWasChosen.name)
    /*
        Filter the criminals application state down to the people that committed the crime
    */
   
    // Get a copy of the array of criminals from the data provider
    const criminalsArray = useCriminals()

    const chosenConvictionObject = convictionsArray.find(convictionObj => {
      return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)

    })

      //console.log(chosenConvictionObject.name)
    /*
      Now that we have the name of the chosen crime, filter the criminals data down to the people that committed the crime
    */
    
   const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
    //console.log(convictionThatWasChosen, "latest")
    return criminalObj.conviction === convictionThatWasChosen.name
  })
  const facilities = useFacilities()
              const crimFac = useCriminalFacilities()
              const criminals = useCriminals()

              // Pass all three collections of data to render()
              render(filteredCriminalsArray, facilities, crimFac)
  // render(filteredCriminalsArray)
    }
      }
      )

    /*
        Then invoke render() and pass the filtered collection as
        an argument
    */

    

eventHub.addEventListener("officerSelected", event => {
  const officerName = event.detail.officer
//console.log(event.detail.officer)
  // How can you get the criminals that were arrested by that officer?
  const criminals = useCriminals()
  const filteredCriminalsArray = criminals.filter (
    criminalObject => {
      if (criminalObject.arrestingOfficer === officerName) {
        return true
      }
    }
  )

  //Render filtered criminals to DOM
  console.log(officerName)
  const facilities = useFacilities()
              const crimFac = useCriminalFacilities()
              

              // Pass all three collections of data to render()
              render(filteredCriminalsArray, facilities, crimFac)
  // renderToDom(filteredCriminalsArray)
})

const render = (criminalsToRender, allFacilities, allRelationships) => {
  // Step 1 - Iterate all criminals
  contentTarget.innerHTML = criminalsToRender.map(
      (criminalObject) => {
          // Step 2 - Filter all relationships to get only ones for this criminal
          const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

          // Step 3 - Convert the relationships to facilities with map()
          const facilities = facilityRelationshipsForThisCriminal.map(cf => {
            console.log(cf)
              const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
              return matchingFacilityObject
          })

          // Must pass the matching facilities to the Criminal component
          return Criminal(criminalObject, facilities)
      }
  ).join("")
}