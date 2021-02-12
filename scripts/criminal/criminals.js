export const Criminal = (criminal, facilities) => {
    console.log(facilities)
    return `
    <section class="criminalCard">
    <div class="criminal">
   <h4 class="criminal__name"> Name: ${criminal.name} </h4>
   <div class="criminal__details">
    <p class="criminal__age"> Age: ${criminal.age}    </p>
    <p class="criminal__arrestingOfficer"> Arresting Officer: ${criminal.arrestingOfficer}    </p>
    <p class="criminal__conviction"> Conviction: ${criminal.conviction}    </p>
    <p class="criminal__knownAssociate"> Known Associate: ${criminal.known_associates[0].name}    </p>
    <p class="criminal__alibis"> Alibis Provided: ${criminal.known_associates[0].alibi}    </p>
    

    <p>Incarcerated between:
              ${new Date(criminal.incarceration.start).toLocaleDateString()} and
              ${new Date(criminal.incarceration.end).toLocaleDateString()}
          </p>
   <p>Age: ${criminal.age}</p>
   </div>
     <button id="associates--${criminal.id}">Associate Alibis</button>
    </section>
    <h2>Facilities</h2>
    <ul>
        ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
    </ul>
</div>
<button id="associates--${criminal.id}">Show Associates</button>
</div>
</div>
    `
}
