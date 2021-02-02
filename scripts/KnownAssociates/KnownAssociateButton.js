

const contentTarget = document.querySelector(".criminalsAssociate")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id.startsWith("associates--")) {
        
        const [prefix, criminalId] = clickEvent.target.id.split("--")
        // console.log(prefix, clickEvent)
       
        const customEvent = new CustomEvent("showAssociatesClicked", {
            detail: {criminalIdTaco: criminalId}
        })
        eventHub.dispatchEvent(customEvent)
        
    }
})

export const ShowAssociatesButton = () => {
    
    contentTarget.innerHTML += "<button id='showAssociates'>Known Associates</button>"
    
}
