
const payWithCard = document.getElementById("pay-with-card");
const payWithTransfer = document.getElementById("pay-with-transfer");
const cardContent = document.getElementById("card");
const transferContent = document.getElementById("transfer");

payWithCard.style.color = "#0254E4";

payWithCard.addEventListener("click", () => {
    cardContent.style.display = "block";
    transferContent.style.display = "none";
    payWithCard.style.color = "#0254E4"; // Reset text color
    payWithTransfer.style.color = ""; // Reset text color
});

payWithTransfer.addEventListener("click", () => {
    cardContent.style.display = "none";
    transferContent.style.display = "block";
    payWithCard.style.color = ""; // Reset text color
    payWithTransfer.style.color = "#0254E4"; // Set text color to redSS
});



// FOR CARD NUMBER INPUT 
const cardNumberInput = document.querySelector('.card-number-input');

cardNumberInput.addEventListener('input', function (event) {
    const value = event.target.value;
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    event.target.value = formattedValue;
});


function validateCardNumber(input) {
    input.value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
}

function validateMonth(input) {
    input.value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
}

function validateYear(input) {
    input.value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
}

function validateCVV(input) {
    input.value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
}






function updateButtonContent(checkbox) {
    var payButton = document.getElementById("payButton");
    var spanElement = payButton.getElementsByTagName("span")[0];

    if (checkbox.checked) {
        spanElement.innerText = "Save and Pay 5,026.00";
    } else {
        spanElement.innerText = "Pay NGN 5,026.00";
    }
}