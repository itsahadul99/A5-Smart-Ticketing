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
        const button = buttonTicket.innerText;
        setBackgroundColor(button)
        // decrease the total seat number and show it
        const selectSeat = getElementById('select')
        selectSeat.style.color = '#1DD100';
        const seatLeft = getElementById('seat-left');
        const seatLeftNumber = parseInt(seatLeft.innerText);
        const seatLeftNumberLeft = seatLeftNumber - 1;
        seatLeft.innerText = seatLeftNumberLeft;
        // increase selected seat and show it
        const selectSeatElement = getElementById('select-seat');
        const selectSeatNumber = parseInt(selectSeatElement.innerText);
        const selectSeatIncrease = selectSeatNumber + 1;
        selectSeatElement.innerText = selectSeatIncrease;
        // show the selected ticket 
        const ticketName = getElementById('ticket-name');
        const p = document.createElement('p');
        p.innerText = buttonTicket.innerText;
        ticketName.appendChild(p);
        const ticketClass = getElementById('ticket-class')
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        ticketClass.appendChild(p2);
        const ticketPriceShower = getElementById('ticket-price');
        const p3 = document.createElement('p');
        p3.innerText = ticketPrice;
        ticketPriceShower.appendChild(p3);
        // total price calculation 
        const totalPriceElement = getElementById('total-price');
        const totalPriceNumber = parseInt(totalPriceElement.innerText);
        const totalTicketPrice = totalPriceNumber + ticketPrice;
        totalPriceElement.innerText = totalTicketPrice;

        // grand total price calculation

        const grandTotalElement = getElementById('grand-total');
        const grandTotalNumber = parseInt(grandTotalElement.innerText);
        const grandTotalPrice = grandTotalNumber + ticketPrice;
        grandTotalElement.innerText = grandTotalPrice;

    })
} 
