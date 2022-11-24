
let wrongCredentials = document.getElementById("wrongCredentials");
let popup = document.getElementById("popup");
let userType;
let isLogedIn;
let inputs;
let usarnameInput;
let passwordInput;


//clean input fields
function cleanInputFields(){
    inputs = document.querySelectorAll('#username, #password');

    inputs.forEach(input => {
        input.value = '';
    });
}


//open and close popup
function openPopup(){
    popup.style.visibility = "visible"
    popup.style.transform = "translate(0%,0%) scale(1)";
    wrongCredentials.style.visibility = "hidden"
}
function closePopup(){
    popup.style.visibility = "hidden"
    wrongCredentials.style.visibility = "hidden"
    popup.style.transform = "translate(0%,0%) scale(0.1)";
    cleanInputFields();
}


//grab inputs from user
function getLoginInputs() {

    usarnameInput = document.getElementById("username").value;
    passwordInput = document.getElementById("password").value;

    return [usarnameInput, passwordInput];
}


//login validator
 function loginValidator(){
    getLoginInputs();
    inputs = getLoginInputs();

    usarnameInput = inputs[0];
    passwordInput = inputs[1];
    const usarname = ["admin", "stuff"];
    let password = "pass";//from db

    //direct to the main page
    if (usarname.includes(usarnameInput) && password==passwordInput){
        userType  = usarnameInput;
        isLogedIn = true;
        cleanInputFields();
        //window.location='http://localhost:63342/CafeOha/Cafe-Oha-Frontend/HTML/welcomeTestPage.html?_ijt=8d9dv1up1760cld8qlbqks9efe&_ij_reload=RELOAD_ON_SAVE';

    } else {
        userType = "unknown";
        isLogedIn = false;

        //present wrong credentials message
        wrongCredentials.style.visibility = "visible"

        //message timeout
        setTimeout(() => {
            wrongCredentials.style.visibility = "hidden";
        }, 1000);
    }

     return [userType,isLogedIn];
}
