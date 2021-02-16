import { ShowAssociatesButton } from "../KnownAssociates/KnownAssociateButton.js";

export const Criminal = (criminal, facilities) => {
  return `
    <div class="criminal">
    <div class="criminalContainerCard">
   <h4 class="criminal__name"> Name: ${criminal.name} </h4>
   <div class="criminal__details">
    <p class="criminal__age"> Age: ${criminal.age}    </p>
    <p class="criminal__conviction"> Conviction: ${criminal.conviction}    </p>
    </div>
    <p>Incarcerated between:
              ${new Date(criminal.incarceration.start).toLocaleDateString()} and
              ${new Date(criminal.incarceration.end).toLocaleDateString()}
          </p>
          ${ShowAssociatesButton(criminal)}
    <h4>Current Facility: ${facilities.map((f) => `<li>${f.facilityName}</li>`).join("")}</h4>
        </div>
    </div>
    `;
};
