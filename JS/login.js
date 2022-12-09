let wrongCredentials = document.getElementById("wrongCredentials");
let popup = document.getElementById("popup");
let userRole;
////.......................................................////.....................................................////
                                                        //To DB//
let isLoggedInS = false;
let isLoggedInA = false;
updateLoginStatus()
////.......................................................////.....................................................////
let inputs;
let usarnameInput;
let passwordInput;
let inputIdSelector = '#username, #password';
let url = 'http://localhost:8080/users';
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
function loginValidator(dbRoleS, dbPasswordS, dbRoleA, dbPasswordA) {
     getUserInputs();
     inputs = getUserInputs();

     usarnameInput = inputs[0];
     passwordInput = inputs[1];


     //direct to the main page
     if (usarnameInput == dbRoleS && passwordInput == dbPasswordS) {
         userRole = usarnameInput;
         isLoggedInS = true;
         isLoggedInA = false;
         cleanInputFields();
         window.location = 'http://localhost:63342/Cafe-Oha-Frontend/HTML/sales.html?_ijt=6tmneul4l4psukj19iirmu1h4p&_ij_reload=RELOAD_ON_SAVE';

     } else if (usarnameInput == dbRoleA && passwordInput == dbPasswordA) {
         userRole = usarnameInput;
         isLoggedInS = false;
         isLoggedInA = true;
         cleanInputFields();
         window.location = 'http://localhost:63342/Cafe-Oha-Frontend/HTML/sales.html?_ijt=6tmneul4l4psukj19iirmu1h4p&_ij_reload=RELOAD_ON_SAVE';

     } else {
         userRole = "unknown";
         isLoggedInA = false;
         isLoggedInS = false;

         //present wrong credentials message
         wrongCredentials.style.visibility = "visible"

         //message timeout
         setTimeout(() => {
             wrongCredentials.style.visibility = "hidden";
         }, 1000);
     }

     ////.......................................................////.....................................................////
                                                             //To DB//
    updateLoginStatus()
     ////.......................................................////.....................................................////

 }

//update login status

function updateLoginStatus() {

    let changingDataA = isLoggedInA;
    let changingDataS = isLoggedInS;

    let thisMethod = "PUT";
    fetch('http://localhost:8080/users/1', {

        method: thisMethod,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                "id": 1,
                "username": "Anjellie",
                "password": "pass",
                "role": "admin",
                "loggedIn": changingDataA
            }
        )
    })
        .then(res => {
            if (!res.ok) {
                console.log(thisMethod + " request unsuccessful")
            }
            return res
        })
        .then(res => res.json())
        .catch(error => console.log(error))


    fetch('http://localhost:8080/users/2', {

        method: thisMethod,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                "id": 1,
                "username": "Sajeta",
                "password": "password",
                "role": "staff",
                "loggedIn": changingDataS
            }
        )
    })
        .then(res => {
            if (!res.ok) {
                console.log(thisMethod + " request unsuccessful")
            }
            return res
        })
        .then(res => res.json())
        .catch(error => console.log(error))


}

//fetch credentials from database
function fetchCredentials() {

    let dbRoleA;
    let dbRoleS;
    let dbPasswordA;
    let dbPasswordS;

    fetch(url)
        .then((res) => res.json())
        .then(data => {
            dbRoleS = data[1].role
            dbPasswordS = data[1].password
            dbRoleA = data[0].role
            dbPasswordA = data[0].password
            console.log(dbRoleS, dbPasswordS, dbRoleA, dbPasswordA);

        })
        .then(() => {
            loginValidator(dbRoleS,dbPasswordS,dbRoleA,dbPasswordA);
        })
        .catch(error=> console.log(error));

}