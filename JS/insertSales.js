//get today's date
let todayDate = new Date().toISOString().slice(0, 10);
console.log('today date is: ' + todayDate);



////.......................................................////.....................................................////

//get menu items from data base
function fetchMI(functionName) {
    let menuItemName= [];
    let thisMI;


    fetch('http://localhost:8080/menu')
        .then((res) => res.json())
        .then(data => {

            for (let i = 0; i < data.length; i++) {
                thisMI = data[i].name
                menuItemName.push(thisMI);
            }
        })
        .then(() => {
            console.log(menuItemName);
            functionName(menuItemName);
        });

}

////.......................................................////.....................................................////


function makeMIhtml(menuItemName) {





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
        newLable.id = menuItemName[i] + "Lable";
        newLable.style.float = "left";
        newLable.style.width = "50%";
        newLable.style.textAlign = "right";
        newLable.style.marginBottom = "20px";


        let newInput = document.createElement('input');
        newInput.type = "number";
        newInput.id = menuItemName[i].replaceAll(' ', '');
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






    //save all sale inputs into an array
    for (let i = 0; i < menuItemName.length; i++) {

        let redText = document.getElementById(menuItemName[i]+"Lable");


        if((document.getElementById(menuItemName[i].replaceAll(' ', '')).value).length === 0){
            arrayInput.push(0);
            redText.style.color = "red";
            redText.style.fontWeight = "bold";
        }
            if (/^\d+$/.test(document.getElementById(menuItemName[i].replaceAll(' ', '')).value)) {
                let result = parseFloat(document.getElementById(menuItemName[i].replaceAll(' ', '')).value);
                arrayInput.push(result);

                redText.style.color = "rgb(188,155,93)";
                redText.style.fontWeight = "normal";

            } else {

                redText.style.color = "red";
                redText.style.fontWeight = "bold";

            }
    }
////.......................................................////.....................................................////
    let text_to_repeat = '';
    for (let i = 0; i < menuItemName.length; i++) {
        text_to_repeat += menuItemName[i] + "  ----------ValueSaved---------> " + arrayInput[i] +"dkk"+ "\n"
    }
    alert(text_to_repeat);



    for (let i = 0; i < arrayInput.length; i++) {


        fetch('http://localhost:8080/menu/sell')
            .then((res) => res.json())
            .then(data => {


                for (let f = 0; f < data.length; f++) {

                    //let inputID = saveInput()[i];
                    let inputID = i + 1;
                    let dbDate;
                    let dbTotalSell;
                    let itemTotalSell;
                    let dbSellID;
                    let menuItemID;
                    let menuItemIdExist = false;
                    let dateExist = false;


                    dbSellID = (f + 1);
                    dbDate = data[f].date;
                    dbTotalSell = data[f].sellPrice;
                    //let menuItemID = data[f];
                    menuItemID = data[f].menuItem.id;
                    console.log(inputID)
                    console.log(data[f].menuItem.id)


                    if (inputID == menuItemID) {
                        menuItemIdExist = true;
                        if (dbDate === todayDate) {
                            dateExist = true;
                            itemTotalSell = dbTotalSell + arrayInput[i];//to db
                            //console.log(itemTotalSell)

                            updateDbTotalSell(dbSellID, itemTotalSell, dbDate, menuItemID)
                        }
                    }


                    if (f == data.length-1 & (!menuItemIdExist || (menuItemIdExist & !dateExist))) {
                        //console.log("works till here :)")

                        let newSalleID = data.length + 1
                        addNewInputToDB(newSalleID, arrayInput[i], todayDate, inputID)
                    }


                }
            })
            .catch(error => console.log(error));
    }

    return arrayInput;
}

function updateDbTotalSell(sellID,sell,theDate,theMiID){
    //console.log(sell);
    let thisMethod = "PUT";
    fetch('http://localhost:8080/menu/sell/'+sellID, {

        method: thisMethod,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                "sellPrice": sell,
                "date": theDate.toString(),
                "menuItem": theMiID
            }
        )
    })
        .then(res => {
            if (!res.ok) {
                console.log(thisMethod + " request unsuccessful")
            }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}



function addNewInputToDB(newID,sell,dateOfSell,miID){

    let thisMethod = "POST";
    fetch('http://localhost:8080/menu/sell', {

        method: thisMethod,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(
            {

                //"item": { "id": id, "name": "somename", "description": "some desc." },



                "id" : newID,
                "sellPrice": sell,
                "date": dateOfSell.toString(),
                "menuItem": miID
            }
        )
    })
        .then(res => {
            if (!res.ok) {
                console.log(thisMethod + " request unsuccessful")
            }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
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
    let resultArray=[];

    for (i = 0; i < menuItemName.length; i++) {
        let str = menuItemName[i];
        let result = str.replaceAll(' ', '');
        resultArray.push(result);
    }

    inputIdSelector = resultArray.toString();
    cleanInputFields()
}
fetchMI(makeMIhtml);












