export const Criminal = (criminal) => {
    return `
    <section class="criminalCard">
    <div class="criminal">
   <p class="criminal__name"> Name: ${criminal.name} </p>
    <p class="criminal__age"> Age: ${criminal.age}    </p>
    <p class="criminal__start"> Incarceration Start Date: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')} </p>
   <p class="criminal__end"> Incarceration End Date: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')} </p>
    </div>
    </section>
    `
}