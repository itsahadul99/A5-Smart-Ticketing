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

// coupon apply button disable
const couponApplyButton = getElementById('coupon-button');
couponApplyButton.addEventListener('click', function(){
    const inputField = getElementById('coupon-field');
    const inputFieldText = inputField.value.toLowerCase();
    const allCouponCode = getElementById('New15').innerText.toLowerCase();
    const coupleCoupon = getElementById('Couple20').innerText.toLowerCase();
    // cheek if input field text is matched all coupon code 
    if(inputFieldText === allCouponCode){
        const grandTotalElement = getElementById('grand-total');
        const grandTotalNumber = parseInt(grandTotalElement.innerText);
        const discountAllCoupon = parseInt(grandTotalNumber * 0.15);
        const finalGrandTotal = grandTotalNumber - discountAllCoupon;
        grandTotalElement.innerText = finalGrandTotal;
        const totalPriceElement = getElementById('price-container');
        const h1 = document.createElement('h1');
        h1.innerText = "Discount";
        const h2 = document.createElement('h1');
        h2.innerText = discountAllCoupon;
        totalPriceElement.appendChild(h1)
        totalPriceElement.appendChild(h2)
        couponApplyButton.classList.add('hidden');
        inputField.classList.add('hidden');
    }
    else if(inputFieldText === coupleCoupon){
    const grandTotalElement = getElementById('grand-total');
    const grandTotalNumber = parseInt(grandTotalElement.innerText);
    const discountAllCoupon = parseInt(grandTotalNumber * 0.20);
    const finalGrandTotal = grandTotalNumber - discountAllCoupon;
    grandTotalElement.innerText = finalGrandTotal;
    const totalPriceElement = getElementById('price-container');
    const h1 = document.createElement('h1');
    h1.innerText = "Discount";
    const h2 = document.createElement('h1');
    h2.innerText = discountAllCoupon;
    totalPriceElement.appendChild(h1)
    totalPriceElement.appendChild(h2)
    couponApplyButton.classList.add('hidden');
    inputField.classList.add('hidden');

    }
});