//clean input fields
function cleanInputFields(){
    inputs = document.querySelectorAll(inputSelector);

    inputs.forEach(input => {
        input.value = '';
    });
}


//open and close popup
function openPopup(){
    popup.style.visibility = "visible"
    popup.style.transform = "translate(0%,0%) scale(1)";
}
function closePopup(){
    popup.style.visibility = "hidden"
    popup.style.transform = "translate(0%,0%) scale(0.1)";
    cleanInputFields();
}