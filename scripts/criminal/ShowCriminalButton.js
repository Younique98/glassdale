const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".button__criminals")

export const printCriminalsButton = () => {
    contentTarget.innerHTML = `
    <button id="displayTheCriminals">Show Criminals</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "displayTheCriminals") {
        const criminalsButton = new CustomEvent("criminalsClicked")

        eventHub.dispatchEvent(criminalsButton)
    }
})