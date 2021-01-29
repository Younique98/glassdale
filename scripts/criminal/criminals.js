export const Criminal = (criminal) => {
    console.log(criminal)
    return `
    <section class="criminalCard">
    <div class="criminal">
   <p class="criminal__name"> Name: ${criminal.name} </p>
    <p class="criminal__age"> Age: ${criminal.age}    </p>
    <p class="criminal__arrestingOfficer"> Arresting Officer: ${criminal.arrestingOfficer}    </p>
    <p class="criminal__conviction"> Conviction: ${criminal.conviction}    </p>
    <p class="criminal__knownAssociate"> Known Associate: ${criminal.known_associates[0][0]}    </p>
    <p class="criminal__alibis"> Alibis Provided: ${criminal.known_associates[0][1]}    </p>
    

    <p class="criminal__start"> Incarceration Start Date: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')} </p>
   <p class="criminal__end"> Incarceration End Date: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')} </p>
    
   </div>
     <button id="associates--${criminal.id}">Associate Alibis</button>
    </section>
    `
}