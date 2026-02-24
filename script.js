const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const totalDisplay = document.getElementById("total");

function calculateTotal() {
    const q = parseFloat(quantity.value) || 0;
    const p = parseFloat(price.value) || 0;

    const total = q * p;
    totalDisplay.textContent = total;
}

quantity.addEventListener("input", calculateTotal);
price.addEventListener("input", calculateTotal);
const form = document.getElementById("orderForm");

form.addEventListener("submit", function(event) {
    if (quantity.value <= 0 || price.value <= 0) {
        alert("Quantity and price must be greater than 0");
        event.preventDefault();
    }
});
