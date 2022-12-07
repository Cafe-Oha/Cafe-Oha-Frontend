
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

















