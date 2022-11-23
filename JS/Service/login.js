
let wrongCredentials = document.getElementById("wrongCredentials");
let popup = document.getElementById("popup");
let credentials = false;
//let exportedCredentials = false;
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
    // popup.classList.add('open-popup')
    popup.style.visibility = "visible"
    popup.style.transform = "translate(0%,0%) scale(1)";
    wrongCredentials.style.visibility = "hidden"
}
function closePopup(){
    // popup.classList.remove('open-popup')
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
    let password = "pass";


    if (usarname.includes(usarnameInput) && password==passwordInput){
        window.location='http://localhost:63342/CafeOha/Cafe-Oha-Frontend/HTML/welcomeTestPage.html?_ijt=8d9dv1up1760cld8qlbqks9efe&_ij_reload=RELOAD_ON_SAVE';
        credentials = true;
        cleanInputFields();
    } else {
        wrongCredentials.style.visibility = "visible"

        //message timeout
        setTimeout(() => {
            wrongCredentials.style.visibility = "hidden";
        }, 1000);
        credentials = false;
    }
    return credentials;
}





function privateWebpage(){
    let showPage = document.getElementsByTagName("html");
    credentials = loginValidator();


    console.log(credentials);
    if (credentials) {
        showPage.style.visibility = "visible";
    }else{
        window.location.assign("http://localhost:63342/CafeOha/Cafe-Oha-Frontend/HTML/login.html?_ijt=80vnr7pb9hql1u2l6ckf4mfsuq&_ij_reload=RELOAD_ON_SAVE");
        showPage.style.visibility = "hidden";
    }
}


//export {loginValidator};