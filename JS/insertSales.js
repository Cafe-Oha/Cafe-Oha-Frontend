//get today's date
let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let todayDate = `${day}.${month}.${year}.`;
//console.log(todayDate);



////.......................................................////.....................................................////

//get menu items from data base
function fetchMI() {
    let menuItemName= [];
    let thisMI;


    fetch('http://localhost:8080/menu.name')
        .then((res) => res.json())
        .then(data => {

            for (let i = 0; i < data.length; i++) {
                thisMI = data[i].main
                menuItemName.push(thisMI);
            }
        })
        .then(() => {
            console.log(menuItemName);
            makeMIhtml(menuItemName);
            saveInput(menuItemName);
            cleanItUP(menuItemName);
        });

}

////.......................................................////.....................................................////


function makeMIhtml(menuItemName) {


    let namingLable = "Label";


    let container = document.getElementById('inputContainer');
    container.innerHTML = "";

//creat an input field in html for each member of the menu item list
    for (let i = 0; i < menuItemName.length; i++) {

        let newLiTag = document.createElement('li')
        let newATag = document.createElement('a');
        newATag.href = "#";

        let newLable = document.createElement('label');
        newLable.htmlFor = menuItemName[i];
        newLable.textContent = menuItemName[i] + ":";
        newLable.id = menuItemName[i] + namingLable;
        newLable.style.float = "left";
        newLable.style.width = "50%";
        newLable.style.textAlign = "right";
        newLable.style.marginBottom = "20px";


        let newInput = document.createElement('input');
        newInput.type = "number";
        newInput.id = menuItemName[i];
        newInput.placeholder = "Insert a sale value...";
        newInput.style.width = "40%";
        newInput.style.marginBottom = "20px";


        let newSpan = document.createElement('span');
        newSpan.textContent = "  dkk";
        newSpan.style.color = "rgb(188,155,93)";
        newSpan.style.marginBottom = "20px";


        container.appendChild(newLiTag);
        newLiTag.appendChild(newATag);
        newATag.appendChild(newLable);
        newATag.appendChild(newInput);
        newATag.appendChild(newSpan);

    }
}




//grab and save user input in the DB
function saveInput(menuItemName) {
    let arrayInput = [];

    //cut the # in each array member to represent an id
    let menuItemNameToSave = menuItemName.map(s => s.slice(1));




    //save all sale inputs into an array
    for (let i = 0; i < menuItemNameToSave.length; i++) {

        let redText = document.getElementById(menuItemNameToSave[i]+namingLable);


        if((document.getElementById(menuItemNameToSave[i]).value).length === 0){
            arrayInput.push(0);
            redText.style.color = "red";
            redText.style.fontWeight = "bold";
        }
            if (/^\d+$/.test(document.getElementById(menuItemNameToSave[i]).value)) {
                let result = parseFloat(document.getElementById(menuItemNameToSave[i]).value);
                arrayInput.push(result);

                redText.style.color = "rgb(188,155,93)";
                redText.style.fontWeight = "normal";

            } else {

                redText.style.color = "red";
                redText.style.fontWeight = "bold";

            }
    }
////.......................................................////.....................................................////
    console.log(arrayInput.toString());
    return arrayInput;
}


function fetchTotalSell() {

    let dbDate;
    let dbTotalSell;


    fetch('http://localhost:8080/menu/sell')
        .then((res) => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                dbDate = data[i].date
                dbTotalSell = data[i].totalSell

                if(todayDate  = dbDate){
                    sumToTotalSell(dbTotalSell);
                }
            }
        })
        .then(() => {

        })
        .catch(error=> console.log(error));

}


function sumToTotalSell(totalSell){

}











//Search menu items
function searchLabels(){
    // Declare variables
    let searchiInput, filter, ul, li, a, i, txtValue;
    searchiInput = document.getElementById('searchBarID');
    filter = searchiInput.value.toUpperCase();

    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function cleanItUP(menuItemName) {
//add a # before each array to represent an id style to use the function utilities.cleanInputFields()
    menuItemName = menuItemName.map(i => '#' + i);
    console.log(menuItemName.toString());
    let inputIdSelector = menuItemName.toString();

//utilities.cleanInputFields()
}
fetchMI();
