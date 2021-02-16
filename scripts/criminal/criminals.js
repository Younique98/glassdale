export const Criminal = (criminal, facilities) => {
    console.log(facilities)
    return `
    
    <div class="criminal">
    <div class="criminalContainerCard">
   <h4 class="criminal__name"> Name: ${criminal.name} </h4>
   <div class="criminal__details">
    <p class="criminal__age"> Age: ${criminal.age}    </p>
    <p class="criminal__arrestingOfficer"> Arresting Officer: ${criminal.arrestingOfficer}    </p>
    <p class="criminal__conviction"> Conviction: ${criminal.conviction}    </p>
    
    </div>
    <p>Incarcerated between:
              ${new Date(criminal.incarceration.start).toLocaleDateString()} and
              ${new Date(criminal.incarceration.end).toLocaleDateString()}
          </p>
   
  
     <button id="associates--${criminal.id}">Known Associates</button>

   
    <h4>Current Facility</h4>
    <ul>
        ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
    </ul>
 </div>


</div>
    
     
     `
}
