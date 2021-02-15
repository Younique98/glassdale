import { getCriminals, useCriminals } from "../criminal/CriminalProvider.js";
import { Criminal } from "../criminal/criminals.js";
import { useConvictions } from "../convictions/ConvictionProvider.js";
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js";
import {getCriminalFacilities, useCriminalFacilities,} from "../facility/CriminalFacilityProvider.js";

const eventHub = document.querySelector(".container");
//---Reminder Add in the contentTarget from line 9 into index.html
const contentTarget = document.querySelector(".FacilityContainerById");
const facilityContainer = document.querySelector(".facilityContainer");

export const FacilityList = () => {
  // Kick off the fetching of both collections of data
  getFacilities()
  
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(() => {
      // Pull in the data now that it has been fetched
      const facilities = useFacilities();
      const crimFac = useCriminalFacilities();
      const criminals = useCriminals();

      // Pass all three collections of data to render()
      render(criminals, facilities, crimFac);
    });
};
const renderToDom = (facilitiesCollection) => {
  let facilitiesHTMLRepresentations = "";

  for (const facility of facilitiesCollection) {
    facilitiesHTMLRepresentations += Facility(facility);
  }

  facilityContainer.innerHTML = `
        <h3>Facilities</h3>
        <section class="facilitiesList">
        ${facilitiesHTMLRepresentations}
        </section>
        `;
};

// Listen for the "facilityChosen" custom event you dispatched in ConvictionSelect
// --Reminder create facilityChosen custom event
eventHub.addEventListener("facilityChosen", (event) => {
  //console.log(event)
  if (facilitiesId === getCriminalFacilities.facilityId) {
    /* 
      We have the the id of the conviction that the user selected from the drop down (event.target.crimeThatWasChosen). But each criminal object has the name of the crime they were convicted for. So we need to get the name of the conviction associated with the unique identifier. To get the name, we get the conviction object which has the property for name. 
    */

    // Get a copy of the array of convictions from the data provider
    const facilityArray = useFacilities();

    // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
    const facilityThatWasChosen = facilityArray.find((facilityObj) => {
      //console.log(convictionObj)
      return facilityObj.facilityId === parseInt(facilityObj.facilityId);
    });

    
    // Get a copy of the array of criminals from the data provider
    const criminalsArray = useCriminals();

    const chosenFacilityObject = criminalsArray.find((facilityObj) => {
      return facilityObj.id === parseInt(facilities.id);
    });


    const filteredCriminalsArray = criminalsArray.filter((facilityObj) => {
      return facilityObj.id === criminalFacilities.facilityId;
    });
    const facilities = useFacilities();
    console.log(facilities);
    const crimFac = useCriminalFacilities();
    const criminals = useCriminals();

    // Pass all three collections of data to render()
    render(filteredCriminalsArray, facilities, crimFac);
   
  }
});

/*
        Then invoke render() and pass the filtered collection as
        an argument
    */

eventHub.addEventListener("facilitiesButtonClicked", (event) => {
  const criminalFacilities = facilities.id;
  //console.log(event.detail.officer)
  // How can you get the criminals that were arrested by that officer?
  const criminals = useCriminals();
  const filteredCriminalsArray = criminals.filter((criminalObject) => {
    if (criminalObject.facilityId === facilities.id) {
      return true;
    }
  });

  //Render filtered criminals to DOM
  
  const facilities = useFacilities();
  const crimFac = useCriminalFacilities();

  // Pass all three collections of data to render()
  render(filteredCriminalsArray, facilities, crimFac);
  // renderToDom(filteredCriminalsArray)
});

const render = (facilitiesToRender, allFacilities, allRelationships) => {
  // Step 1 - Iterate all criminals
  contentTarget.innerHTML = facilitiesToRender
    .map((criminalObject) => {
      // Step 2 - Filter all relationships to get only ones for this criminal
      const facilityRelationshipsForThisCriminal = allRelationships.filter(
        (facilityPlaced) => facilityPlaced.criminalId === criminalObject.id
      );

      // Step 3 - Convert the relationships to facilities with map()
      const facilities = facilityRelationshipsForThisCriminal.map((facilityPlaced) => {
        
        const matchingFacilityObject = allFacilities.find(
          (facility) => facility.id === facilityPlaced.facilityId
        );
        return matchingFacilityObject;
      });

      // Must pass the matching facilities to the Criminal component
      return Criminal(criminalObject, facilities);
    })
    .join("");
};
