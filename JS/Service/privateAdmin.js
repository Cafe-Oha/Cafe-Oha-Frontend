let url = 'http://localhost:8080/users';
let mainPageURL  ='http://localhost:63342/Cafe-Oha-Frontend/HTML/login.html?_ijt=14i1mjh9l1e143lnhtsn3sk1kj&_ij_reload=RELOAD_ON_SAVE';


//admin pages login verifier
function verifyIsAdmin(dbIsLoggedInA){

    document.getElementsByTagName("body")[0].style.visibility = "hidden";
    if(dbIsLoggedInA) {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
        console.log("The admin is logged in.");
    }else{
        window.location.replace(mainPageURL);
    }
}


function fetchIsAdmin() {

    let dbIsLoggedInA;


    fetch(url)
        .then((res) => res.json())
        .then(data => {

            dbIsLoggedInA = data[0].loggedIn

        })
        .then(() => {
            verifyIsAdmin(dbIsLoggedInA);
        });

}

fetchIsAdmin();