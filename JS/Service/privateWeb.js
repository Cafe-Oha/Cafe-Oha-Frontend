let url = 'http://localhost:8080/users';
let mainPageURL  ='http://localhost:63342/Cafe-Oha-Frontend/HTML/login.html?_ijt=14i1mjh9l1e143lnhtsn3sk1kj&_ij_reload=RELOAD_ON_SAVE';

//all access pages login verifier
function verifyLogin(dbIsLoggedInS, dbIsLoggedInA){
    let whoLoggedIn;
    document.getElementsByTagName("body")[0].style.visibility = "hidden";
    if(dbIsLoggedInS || dbIsLoggedInA) {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }else{
        window.location.replace(mainPageURL);
    }
    if(dbIsLoggedInS){
        whoLoggedIn ="The staff is logged in.";
    }else if(dbIsLoggedInA){
        whoLoggedIn = "The admin is logged in.";
    }else{
        whoLoggedIn = "!?";
    }

    console.log(whoLoggedIn);
}


function fetchIsLoggedIn() {

    let dbIsLoggedInS;
    let dbIsLoggedInA;


    fetch('http://localhost:8080/users')
        .then((res) => res.json())
        .then(data => {
            dbIsLoggedInS = data[1].loggedIn
            dbIsLoggedInA = data[0].loggedIn

        })
        .then(() => {
            verifyLogin(dbIsLoggedInS, dbIsLoggedInA);
        });

}

fetchIsLoggedIn();