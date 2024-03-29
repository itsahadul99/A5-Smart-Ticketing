// buy button clicked event 
document.getElementById('buy-ticket').addEventListener('click', function () {
    const ticketSection = getElementById('ticket-section');
    ticketSection.scrollIntoView();
})
// button selection
let counter = 1;
const ticketPrice = 550;
const buttonsTicket = document.getElementsByClassName("btn-ticket");
for (const buttonTicket of buttonsTicket) {
    buttonTicket.addEventListener('click', function () {
        const button = buttonTicket.innerText;
        setBackgroundColor(button);
        // limit seat select 
        counter++;
        if(counter > 5){
            document.getElementsByClassName("btn-ticket").disabled = true;
            alert("You can only select 4 seat at a time !!!");
            removeBackgroundColor(button);
            return;
        }
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

    },{once : true})
};

// coupon apply button disable
const couponApplyButton = getElementById('coupon-button');
couponApplyButton.addEventListener('click', function () {
    const inputField = getElementById('coupon-field');
    const inputFieldText = inputField.value;
    const allCouponCode = getElementById('NEW15').innerText;
    const coupleCoupon = getElementById('Couple 20').innerText;
    // cheek if input field text is matched all coupon code 
    if (inputFieldText === allCouponCode) {
        discountFunction(0.15)
        hiddenElement('coupon-button');
        hiddenElement('coupon-field');
    }
    else if (inputFieldText === coupleCoupon) {
        discountFunction(0.20);
        hiddenElement('coupon-button');
        hiddenElement('coupon-field');
    }
    else {
        alert('Please enter valid coupon code')
        inputField.value = '';
    }
});