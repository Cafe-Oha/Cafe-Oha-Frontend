












//creat addButton if the user is admin
////.......................................................////.....................................................////
let userType  = "admin";                                     //From DB//
////.......................................................////.....................................................////
let permission = "admin";
let salesContainer = document.getElementById('addSalesContainer');
salesContainer.innerHTML = "";
if(permission == userType ){
    let newButton = document.createElement('button');
    newButton.className = "button";
    newButton.id ="addButton";
    newButton.textContent = "Add";

    salesContainer.appendChild(newButton);
}
function linkMypage(){
    window.location.href='http://localhost:63342/CafeOha/Cafe-Oha-Frontend/HTML/insertSales.html?_ijt=9vof9hgojd1lgvo93dkvvspvsm&_ij_reload=RELOAD_ON_SAVE';
}
let addAddButton  = document.getElementById("addButton");
addAddButton.addEventListener("click", linkMypage);