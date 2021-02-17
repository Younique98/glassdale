import { ShowAssociatesButton } from "../KnownAssociates/KnownAssociateButton.js";

export const Criminal = (criminalObj, facilitiesArray) => {
  
  
  return `
    <div class="criminal">
    <div class="criminalContainerCard">
   <h4 class="criminal__name"> Name: ${criminalObj.name} </h4>
   <div class="criminal__details">
    <p class="criminal__age"> Age: ${criminalObj.age}    </p>
    <p class="criminal__conviction"> Conviction: ${criminalObj.conviction}    </p>
    </div>
    <p>Incarcerated between:
              ${new Date(criminalObj.incarceration.start).toLocaleDateString()} and
              ${new Date(criminalObj.incarceration.end).toLocaleDateString()}
          </p>
          ${ShowAssociatesButton(criminalObj)} 
    <h4>Current Facility: ${facilitiesArray.map((f) => `<li>${f.facilityName}</li>`).join("")}</h4>
  
        </div>
    </div>
    `;
    
};

//---- facilities is bringing back an array of facilities containing the id, criminalId and facilityId