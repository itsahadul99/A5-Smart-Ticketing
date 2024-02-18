function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.style.backgroundColor = '#1DD100'
}
function getElementById (elementId){
    const element = document.getElementById(elementId);
    return element;
}
// buy button clicked event 
document.getElementById('buy-ticket').addEventListener('click', function(){
    const ticketSection = getElementById('ticket-section');
    ticketSection.scrollIntoView()
})
// button selection
const ticketPrice = 550;
const buttonsTicket = document.getElementsByClassName("btn-ticket");
for(const buttonTicket of buttonsTicket){
    buttonTicket.addEventListener('click', function(){

    })
} 
