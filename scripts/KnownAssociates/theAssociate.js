
export const KnownAssociate = (associate) => {
     console.log("known associates maybe", associate)
    return `
    <section class="associateCard">
    <div class="associate">
   <p class="associate__knownAssociate"> Known Associate: ${criminal.known_associates[0].name}    </p>
    <p class="associate__alibis"> Alibis Provided: ${criminal.known_associates[0].alibi}    </p>
   </div>
    </section>
    `
}
