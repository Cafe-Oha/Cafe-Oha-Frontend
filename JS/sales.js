
function fetchGraphData(functionName) {
    fetch('http://localhost:8080/menu/sell')
        .then((res) => res.json())
        .then(data => {


            let theLenght;
            let dbDate;
            let dbTotalSell;
            let dbMenuItemID;
            let arrayDbDate = [];
            let arrayDbTotalSell = [];
            let arrayDbMenuItemID = [];


            for (let i = 0; i < data.length; i++) {

                theLenght = data.length;
                dbDate = data[i].date;
                dbTotalSell = data[i].sellPrice;
                dbMenuItemID = data[i].menuItem.id;

                arrayDbDate.push(dbDate);
                arrayDbTotalSell.push(dbTotalSell);
                arrayDbMenuItemID.push(dbMenuItemID);
            }

            functionName(theLenght,arrayDbDate,arrayDbTotalSell,arrayDbMenuItemID);
        })
        .then(() => {

        });

}

function graphDisplayer(theLenght,arrayDbDate,arrayDbTotalSell,arrayDbMenuItemID){

    let arrayWeek = new Array();
    arrayWeek[0] = undefined;
    arrayWeek[1] = undefined;
    arrayWeek[2] = undefined;
    arrayWeek[3] = undefined;
    arrayWeek[4] = undefined;
    arrayWeek[5] = undefined;
    arrayWeek[6] = undefined;


    let arraySell = new Array();
    arraySell[0] = 0;
    arraySell[1] = 0;
    arraySell[2] = 0;
    arraySell[3] = 0;
    arraySell[4] = 0;
    arraySell[5] = 0;
    arraySell[6] = 0;


    let arrayMenuItem = new Array();
    arrayMenuItem[0] = 0;
    arrayMenuItem[1] = 0;
    arrayMenuItem[2] = 0;
    arrayMenuItem[3] = 0;
    arrayMenuItem[4] = 0;
    arrayMenuItem[5] = 0;
    arrayMenuItem[6] = 0;



    /*
    let sunday = 0;
    let monday = 1;
    let tuesday = 2;
    let wednesday = 3;
    let thursday = 4;
    let friday = 5;
    let saturday = 6;
    */

    for (let f = 0; f < theLenght; f++) {

        let weekDate = new Date(arrayDbDate[f]);

        if (isDateInThisWeek(weekDate)){
            arrayWeek[weekDate.getDay()] = arrayDbDate[f];

                for (let i = 0; i < theLenght; i++) {
                    if (arrayDbTotalSell[i] > arraySell[0]) {
                        arraySell[0] = arrayDbTotalSell[i];
                        arrayMenuItem[0] = arrayDbMenuItemID[i];
                    }
                }
                for (let i = 0; i < theLenght; i++) {
                    if (arrayDbTotalSell[i] > arraySell[1]
                        && arrayDbTotalSell[i] < arraySell[0]) {
                        arraySell[1] = arrayDbTotalSell[i];
                        arrayMenuItem[1] = arrayDbMenuItemID[i];
                    }
                }
                for (let i = 0; i < theLenght; i++) {
                    if (arrayDbTotalSell[i] > arraySell[2]
                        && arrayDbTotalSell[i] < arraySell[1]) {
                        arraySell[2] = arrayDbTotalSell[i];
                        arrayMenuItem[2] = arrayDbMenuItemID[i];
                    }
                }
                for (let i = 0; i < theLenght; i++) {
                    if (arrayDbTotalSell[i] > arraySell[3]
                        && arrayDbTotalSell[i] < arraySell[2]) {
                        arraySell[3] = arrayDbTotalSell[i];
                        arrayMenuItem[3] = arrayDbMenuItemID[i];
                    }
                }
                for (let i = 0; i < theLenght; i++) {
                    if (arrayDbTotalSell[i] > arraySell[4]
                        && arrayDbTotalSell[i] < arraySell[3]) {
                        arraySell[4] = arrayDbTotalSell[i];
                        arrayMenuItem[4] = arrayDbMenuItemID[i];
                    }
                }
                for (let i = 0; i < theLenght; i++) {
                    if (arrayDbTotalSell[i] > arraySell[5]
                        && arrayDbTotalSell[i] < arraySell[4]) {
                        arraySell[5] = arrayDbTotalSell[i];
                        arrayMenuItem[5] = arrayDbMenuItemID[i];
                    }
                }
                for (let i = 0; i < theLenght; i++) {
                    if (arrayDbTotalSell[i] > arraySell[6]
                        && arrayDbTotalSell[i] < arraySell[5]) {
                        arraySell[6] = arrayDbTotalSell[i];
                        arrayMenuItem[6] = arrayDbMenuItemID[i];
                    }
                }
        }
    }
//display graph here



}



function isDateInThisWeek(date) {
    let todayObj = new Date();
    let todayDate = todayObj.getDate();
    let todayDay = todayObj.getDay();


    let firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));

    let lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 7);

    return date >= firstDayOfWeek && date <= lastDayOfWeek;
}




























function buttonIfAdmin(adminOK) {
    let salesContainer = document.getElementById('addSalesContainer');
    salesContainer.innerHTML = "";
    if (adminOK) {
        let newButton = document.createElement('button');
        newButton.className = "button";
        newButton.id = "addButton";
        newButton.textContent = "Add";

        salesContainer.appendChild(newButton);



        function linkMypage(){
            window.location.href='http://localhost:63342/Cafe-Oha-Frontend/HTML/insertSales.html?_ijt=7nhi4td1s35aebok85c6f8pln9&_ij_reload=RELOAD_ON_SAVE';
        }
        let addAddButton  = document.getElementById("addButton");
        addAddButton.addEventListener("click", linkMypage);
    }
}

function fetchAdminOK() {

    let adminOK;


    fetch(url)
        .then((res) => res.json())
        .then(data => {

            adminOK = data[0].loggedIn

        })
        .then(() => {
            buttonIfAdmin(adminOK);
        });

}

fetchAdminOK();