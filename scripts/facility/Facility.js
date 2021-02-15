export const Facility = (facility, criminal) => {

    return `
    <div class="sortedByFacilities">
    <div class="facilitiesContainerCard">

    // --- The string interperlation will map over the facilities to grab the faclity Name from https://criminals.glassdale.us/facilities
    <h4>
        ${facilities.map(fName => `<li>${fName.facilityName}</li>`).join("")}
    </h4>

    // --- The string interperlation will map over the facilities to grab the faclity Security Level from https://criminals.glassdale.us/facilities
    <ul>
        ${facilities.map(fSecurity => `<li>${fSecurity.securityLevel}</li>`).join("")}
    </ul>

    // --- The string interperlation will map over the facilities to grab the faclity Capacity from https://criminals.glassdale.us/facilities
    <ul>
        ${facilities.map(fCapacity=> `<li>${fCapacity.capacity}</li>`).join("")}
    </ul>

    // --- The string interperlation will map over the facilities to grab the faclity Name from https://criminals.glassdale.us/criminals
    
    <h4 class="criminal__names"> Name: ${criminal.name} </h4>

    // This button will sort the facilities based on their id's from the https://criminals.glassdale.us/criminalFacilities to match those to the id's on https://criminals.glassdale.us/facilities
    <button id="facility--${facility.facilityId}">List Facilities</button>
    </div>`
}