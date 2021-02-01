// document.getElementById("associates--${criminal.id}").addEventListener("click", function() {
//   document.querySelector(".criminalsAssociate").innerHTML = `
//   <p class="criminal__knownAssociate"> Known Associate: ${criminal.known_associates[0].name}    </p>
//     <p class="criminal__alibis"> Alibis Provided: ${criminal.known_associates[0].alibi}    </p>
//     `
// });

// export const KnownAssociateAndAlibi = (knowingAssociate) => {
//   return `
//   <p class="criminal__knownAssociate"> Known Associate: ${criminal.known_associates[0].name}    </p>
//     <p class="criminal__alibis"> Alibis Provided: ${criminal.known_associates[0].alibi}    </p>
    
//   `
// }

const contentTarget = document.querySelector(".criminalsAssociate")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id.startsWith("associates--")) {
        
        const [prefix, criminalId] = clickEvent.target.id.split("--")
        console.log(prefix, clickEvent)
       
        const customEvent = new CustomEvent("showAssociatesClicked", {
            detail: {criminalIDTaco: criminalId}
        })
        eventHub.dispatchEvent(customEvent)
        
    }
})

export const ShowAssociatesButton = () => {
    
    contentTarget.innerHTML += "<button id='showAssociates'>Known Associates</button>"
    
}
