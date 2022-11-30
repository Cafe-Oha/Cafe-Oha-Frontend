
const menuItem = document.querySelector(".menuTitle");
const menuInstructions = document.querySelector(".descriptionText");

//Get id from URL sent by menuItem2.html
const param = new URLSearchParams(window.location.search);
const urlId = param.get("id");
const id = urlId;
const apiUrl = "http://localhost:8080/menu/" + id
const menuItemPage= true


function out(any){
    console.log(any);
}

async function getIt(){
    out("inside getIt()")
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    menuItem.textContent = data.item;
    menuInstructions.textContent = data.instructions;
}
getIt();