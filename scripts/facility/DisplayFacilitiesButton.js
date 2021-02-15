const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showFacilities") {
        
        
       
        const customEvent = new CustomEvent("facilitiesButtonClicked")
        //console.log(new CustomEvent("showFacilitiesClicked"))
        eventHub.dispatchEvent(customEvent)
        
    }
})

export const DisplayFacilitiesButton = () => {
    
    contentTarget.innerHTML += "<button id='facilitiesButton'>Show Notes</button>"
    
}