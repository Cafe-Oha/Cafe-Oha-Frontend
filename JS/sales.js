
////.......................................................////.....................................................////
let menuItemName= ["chips","sandwich","soup","toast","salad","applePie"];  //From DB//
////.......................................................////.....................................................////






    let container = document.getElementById('inputContainer');
    container.innerHTML = "";

//creat an input field in html for each member of the menu item list
    for (let i = 0; i < menuItemName.length; i++) {

        let newLable= document.createElement('label');
        newLable.htmlFor = menuItemName[i];
        newLable.textContent = menuItemName[i]+":";
        newLable.style.float = "left";
        newLable.style.width ="50%";
        newLable.style.color = "rgb(188,155,93)";
        newLable.style.textAlign = "right";
        newLable.style.marginBottom = "20px";


        let newInput = document.createElement('input');
        newInput.type ="number";
        newInput.id = menuItemName[i];
        newInput.style.width="40%";
        newInput.style.marginBottom = "20px";


        let newSpan = document.createElement('span');
        newSpan.textContent ="  dkk";
        newSpan.style.color = "rgb(188,155,93)";
        newSpan.style.marginBottom = "20px";



        container.appendChild(newLable);
        container.appendChild(newInput);
        container.appendChild(newSpan);

    }





//grab and save user input in the DB
function saveInput() {
        let arrayInput = [];

        //cut the # in each array member to represent an id
        let menuItemNameToSave = menuItemName.map(s => s.slice(1));

        //save all sale inputs into an array
        for (let i = 0; i < menuItemNameToSave.length; i++) {

            arrayInput.push(document.getElementById(menuItemNameToSave[i]).value);

        }
////.......................................................////.....................................................////
        //let menuItemTotalSale.date = 100000;          //From DB//
////.......................................................////.....................................................////
////.......................................................////.....................................................////
        console.log(arrayInput.toString())               //To DB//
    // connect to the total sale of an menu item and the date
    // sum the value as total sale of the item per date
    // identify the date and connect it to the tables

    // UpdatedMenuItemTotalSale AND date
////.......................................................////.....................................................////
    }

    //add a # before each array to represent an id style to use the function utilities.cleanInputFields()
menuItemName = menuItemName.map(i => '#' + i);
let inputIdSelector = menuItemName.toString();

//utilities.cleanInputFields()