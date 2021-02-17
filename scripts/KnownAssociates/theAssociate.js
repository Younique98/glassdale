
export const KnownAssociate = (associate) => {
     debugger
    return `
    <div class = "associate">
    <h3>${associate.known_associates[0].name}</h3>
    <p>Alibi: ${associate.known_associates[0].alibi}</p>
    
    </div>
    `
}
