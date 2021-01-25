let convictions = []    

export const useConvictions = () => {
    return convictions.slice()
}

export const ConvictionProvider = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            ConvictionSelect => {
                console.table(ConvictionSelect)
                convictions = ConvictionSelect
            }
        )
}

//  export const gotconvictions = convictions
// console.log(gotconvictions)

