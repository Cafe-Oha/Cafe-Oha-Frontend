
//import isLogedIn from login

let isLogedIn = true;

(function makeItInvisible(){
    document.getElementsByTagName("body")[0].style.visibility = "hidden";
    if(isLogedIn) {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }else{
        window.location.replace("http://localhost:63342/CafeOha/Cafe-Oha-Frontend/HTML/login.html?_ijt=l2gukli4o0nak6ag5lv2ghcjof&_ij_reload=RELOAD_ON_SAVE");
    }
}());
