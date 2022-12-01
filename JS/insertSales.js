////.......................................................////.....................................................////
let menuItemName= ["chips","sandwich","soup","toast","salad","applePie"];  //From DB//
////.......................................................////.....................................................////
let namingLable = "Label";


let container = document.getElementById('inputContainer');
container.innerHTML = "";

//creat an input field in html for each member of the menu item list
for (let i = 0; i < menuItemName.length; i++) {

    let newLable= document.createElement('label');
    newLable.htmlFor = menuItemName[i];
    newLable.textContent = menuItemName[i]+":";
    newLable.id =menuItemName[i]+namingLable;
    newLable.style.float = "left";
    newLable.style.width ="50%";
    newLable.style.color = "rgb(188,155,93)";
    newLable.style.textAlign = "right";
    newLable.style.marginBottom = "20px";


    let newInput = document.createElement('input');
    newInput.type ="number";
    newInput.id = menuItemName[i];
    newInput.placeholder = "Insert a sale value...";
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
                console.log("this is working");


            }
    }
////.......................................................////.....................................................////
    //let menuItemTotalSale.date = 100000;          //From DB//
////.......................................................////.....................................................////
////.......................................................////.....................................................////
                                                        //To DB//

    alert(arrayInput.toString());
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
