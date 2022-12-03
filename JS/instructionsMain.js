import { getAll  } from "./Service/API_calls.js";


const mainMenuItem = document.querySelector(".menuTitle");
const menuInstructions = document.querySelector(".descriptionTitle");

//Get id from URL sent by menuItem.html
const param = new URLSearchParams(window.location.search);
const urlId = param.get("id");
const id = urlId;
const apiUrl = "http://localhost:8080/mainMenu/" + id
const mainMenuItemPage= true


function out(any){
    console.log(any);
}

async function getIt(){
    out("inside getIt()")
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    mainMenuItem.textContent = data.main;
    menuInstructions.textContent = data.instructions;
}
getIt()