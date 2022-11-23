
let wrongCredentials = document.getElementById("wrongCredentials");
let popup = document.getElementById("popup");

//popup
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
}

//login validator
let usarnameInput = "admin";
let passwordInput = "passs";
const usarname = "admin";
let password = "pass";
let credentials = false;


function loginValidator(){
    if (usarnameInput == usarname && password==passwordInput){
        window.location='http://localhost:63342/CafeOha/Cafe-Oha-Frontend/HTML/welcomeTestPage.html?_ijt=8d9dv1up1760cld8qlbqks9efe&_ij_reload=RELOAD_ON_SAVE';
        credentials = true;
    } else {
        wrongCredentials.style.visibility = "visible"

        //message timeout
        setTimeout(() => {
            const box = wrongCredentials;
            box.style.visibility = "hidden";
        }, 1000);



        credentials = false;
    }
}




//making following pages private
/*var app = angular.module("myApp", ["ngRoute"])

    .config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when("/",{
                templateUrl : "pages/login.html",
                controller : "loginController"
            })
            .when("/welcome",{
                templateUrl: "pages/welcome.html",
                controller:"welcomeController"
            })

    })


    .controller("loginController", function($scope, $location, $rootScope){
        $scope.login = function() {
            var user = $scope.username;
            var password = $scope.password;
            /*var result = $scope.username + $scope.password;
            console.log(result);
            if (user == "admin" && password == 'admin'){
                $rootScope.loggedIn = true;
                $location.path('/welcome');
            } else {
                alert("INVALID CREDENTIALS");
            }
        }
    })



    .controller('welcomeController', function($scope){
        $scope.message = "welcome here";
    })


    .controller('logoutController', function($scope,$location) {
        $scope.logOut = function () {
            $location.path('/');
        })*/
