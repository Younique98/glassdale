import "./theAssociate.js";
import "./knownAssociateList.js"

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("associates--")) {
    const [prefix, criminalId] = clickEvent.target.id.split("--");
        const customEvent = new CustomEvent("showAssociatesClicked", {
      detail: { 
          criminalIdTaco: parseInt(criminalId)
         },
    });
    eventHub.dispatchEvent(customEvent);
  }
});

export const ShowAssociatesButton = (criminalObj) => {
   
    // debugger
  return `<button id="associates--${criminalObj}">Associate Alibis</button>`
};
