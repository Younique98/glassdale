let convictions = []    

export const useConvictions = () => {
    return convictions.slice()
}





export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            crimeData => {
                console.table(crimeData)
                convictions = crimeData
            }
        )
}
//  export const gotconvictions = convictions
// console.log(gotconvictions)

