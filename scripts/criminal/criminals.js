export const Criminal = (criminal) => {
    return `
    <p class="criminal">
    ${criminal.name}
    ${criminal.age}
    ${criminal.conviction}
    ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
    </p>
    `
}