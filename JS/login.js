//import * as db from "../JS/Service/API_calls";

let wrongCredentials = document.getElementById("wrongCredentials");
let popup = document.getElementById("popup");
let userType;
////.......................................................////.....................................................////
let isLogedIn = false;                                   //To DB//
////.......................................................////.....................................................////
let inputs;
let usarnameInput;
let passwordInput;
let inputIdSelector = '#username, #password';
let elementID = ["username","password"];
wrongCredentials.style.visibility = "hidden";

//utilities.cleanInputFields()
//utilities.openPopup()
//utilities.closePopup()


//grab inputs from user
function getUserInputs() {

    usarnameInput = document.getElementById("username").value;
    passwordInput = document.getElementById("password").value;

    return [usarnameInput, passwordInput];
}


//login validator
 function loginValidator(){
    getUserInputs();
    inputs = getUserInputs();

    usarnameInput = inputs[0];
    passwordInput = inputs[1];
    const stuffUser = "stuff";
    const adminUser = "admin";

     ////.......................................................////.....................................................////
    let passwordAdmin = "pass";
    let passwordStuff  = "pass1";                            //From DB//
     ////.......................................................////.....................................................////

    //direct to the main page
    if (usarnameInput == stuffUser  && passwordInput == passwordStuff){
        userType  = usarnameInput;
        isLogedIn = true;
        cleanInputFields();
        window.location='http://localhost:63342/CafeOha/Cafe-Oha-Frontend/HTML/sales.html?_ijt=evnldkdj4u6rf0ofn1ri4djbtv&_ij_reload=RELOAD_ON_SAVE';

    } else if (usarnameInput == adminUser && passwordInput == passwordAdmin){
        userType  = usarnameInput;
        isLogedIn = true;
        cleanInputFields();
        window.location='http://localhost:63342/CafeOha/Cafe-Oha-Frontend/HTML/sales.html?_ijt=evnldkdj4u6rf0ofn1ri4djbtv&_ij_reload=RELOAD_ON_SAVE';

    } else{
         userType = "unknown";
         isLogedIn = false;

         //present wrong credentials message
         wrongCredentials.style.visibility = "visible"

         //message timeout
         setTimeout(() => {
             wrongCredentials.style.visibility = "hidden";
         }, 1000);
     }

     ////.......................................................////.....................................................////
     return [userType,isLogedIn];                            //To DB//
    ////.......................................................////.....................................................////

}

