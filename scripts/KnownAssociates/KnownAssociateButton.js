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

// --- pulls the id off the criminalList.js at line 126
export const ShowAssociatesButton = (criminalObj) => {
console.log(criminalObj)
    // debugger
   return `<button id="associates--${criminalObj.id}">Associate Alibis</button>` 
  
};
