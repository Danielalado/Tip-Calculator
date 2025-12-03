const billAMount = document.getElementById("billAmount");

const customTipAmout =  document.getElementById("customerTipAmount");

const splitCount = document.getElementById("splitCount");

const totalAmount = document.getElementById("totalAMount");
const tipAmount = document.getElementById("tipAmount");
const  amountperHead = document.getElementById("amountPerPerson");

function reset() {
    billAMount.value = "";
    customTipAmout.value = "";
    splitCount.value = "";
}

function submit () {
    const bill =parseFloat(billAMount.value);
    const tip = parseFloat(customTipAmout.value);
    const numberOfPeople = splitCount.value;

    if (!bill || !tip || !numberOfPeople) {
        alert("some fields are empty");
    } else {
        const totalBill = parseFloat(bill + tip);
        const amoutPerPerson = parseFloat(totalBill / numberOfPeople)

        totalAmount.innerHTML = `The total amount is : ${totalBill}`;
        tipAmount.innerHTML = `Your tip is : ${tip};`
        amountperHead.innerHTML = `Each person pays : ${amoutPerPerson}`;
    }

    reset ();
}

function toggleDivVisibility() {
    const serviceRatingRadioButton = document.getElementById("serviceRatingSelect");
    const serviceRatingInputDiv = document.getElementById("serviceRatingInput");

    if (serviceRatingRadioButton.checked) {
        serviceRatingInputDiv.style.display = "block";
    } else {
        serviceRatingInputDiv.style.display = "none";
    }

}


const customTip = document.getElementById("customTip");
    const serviceRating = document.getElementById("serviceRating");

    const customInput = document.getElementById("customerTipInput");
    const ratingInput = document.getElementById("serviceRatingInput");

    customTip.addEventListener("change", function (){
        customInput.style.display = "block";
        ratingInput.style.display = "none";
    });

    serviceRating.addEventListener("change", function () {
        customInput.style.display = "none";
        ratingInput.style.display = "block";
    });
