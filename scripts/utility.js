function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.style.backgroundColor = '#1DD100'
}
function getElementById(elementId) {
    const element = document.getElementById(elementId);
    return element;
}

function discountFunction(value) {
    const grandTotalElement = getElementById('grand-total');
    const grandTotalNumber = parseInt(grandTotalElement.innerText);
    const discountAllCoupon = parseInt(grandTotalNumber * value);
    const finalGrandTotal = grandTotalNumber - discountAllCoupon;
    grandTotalElement.innerText = finalGrandTotal;
    const totalPriceElement = getElementById('price-container');
    const h1 = document.createElement('h1');
    h1.innerText = "Discount";
    const h2 = document.createElement('h1');
    h2.innerText = `BDT ${discountAllCoupon}`;
    totalPriceElement.appendChild(h1)
    totalPriceElement.appendChild(h2)
}
function hiddenElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElement(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}
