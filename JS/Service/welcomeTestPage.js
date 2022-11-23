import {loginValidator} from 'C:\Users\Bruger\Desktop\Code\CafeOha\Cafe-Oha-Frontend\HTML\login.html';
import {usernameInput} from 'C:\Users\Bruger\Desktop\Code\CafeOha\Cafe-Oha-Frontend\HTML\login.html';

let seeCredentials;

(function makeItVisible(){
    let see = document.getElementsByTagName("p");

    see.style.visibility = "visible";
}());



/*(function privateWebpage(){
    let showPage = document.getElementsByTagName("html");
    seeCredentials = loginValidator();


    console.log(seeCredentials);
    if (seeCredentials) {
        showPage.style.visibility = "visible";
    }else{
        window.location.assign("http://localhost:63342/CafeOha/Cafe-Oha-Frontend/HTML/login.html?_ijt=80vnr7pb9hql1u2l6ckf4mfsuq&_ij_reload=RELOAD_ON_SAVE");
        showPage.style.visibility = "hidden";
    }
}());*/
