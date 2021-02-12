let criminals = []

export const useCriminals = () =>  criminals.slice()
// -- .slice returns a copy of the criminals array
export const getCriminals = () => {
    // get data from criminal api, parse that data, update the criminal array with that data
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                //console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )
}