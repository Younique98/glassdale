export const Criminal = (criminalObj) => {
    return `
    <p class="criminal>
    ${criminalObj.name}
    ${criminalObj.age}
    ${criminalObj.conviction}
    ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
    </p>
    `
}