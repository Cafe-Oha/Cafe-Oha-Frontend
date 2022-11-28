/*CHRIS WORKING SAVE*/

/*

// Add test products to <table>
function testInventoryAdd() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#inventoryTable tbody").length == 0) {
        $("#inventoryTable").append("<tbody></tbody>");
    }

    // Append product to the table
    $("#inventoryTable tbody").append("<tr>" +
        "<td>Flour</td>" +
        "<td>20</td>" +
        "<td>KG</td>" +
        "</tr>");

    $("#inventoryTable tbody").append("<tr>" +
        "<td>Oil</td>" +
        "<td>3</td>" +
        "<td>L</td>" +
        "</tr>");

    $("#inventoryTable tbody").append("<tr>" +
        "<td>Avocado</td>" +
        "<td>5</td>" +
        "<td>KG</td>" +
        "</tr>");
}

$(document).ready(function () {
    testInventoryAdd();
});
*/

////////////Ignore the stuff above this line



/*
function addToInventory() {
    let a = $("#iid").val();
    let b = $("#iquantity").val();
    let c = $("#iunit").val();

    $("#inventoryTable tbody").append("<tr><td>" + a + "</td><td>" + b + "</td><td>" + c + "</td></tr>");
    $("#iid").val('');
    $("#iquantity").val('');
    $("#iunit").val('');
}

*/


function openForm() {
    document.getElementById("addInvForm").style.display = "block";
}

function closeForm() {
    document.getElementById("addInvForm").style.display = "none";
}







//display all ingredients in table




fetch('http://localhost:8080/ingredients')
    .then(res => {
        return res.json();
    }).then(data => {
    data.forEach(ingredient => {
        const markup = `<td>${ingredient.name}</td>
                            <td>${ingredient.quantity}</td>
                            <td>${ingredient.unit}</td>`;
        document.querySelector('table').insertAdjacentHTML('beforeend', markup);
    });
})
    .catch(err => console.error(err));










"use strict"

const formAdd = document.querySelector('#addInvForm');

//adding ingredients
formAdd.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formAdd);
    const data = Object.fromEntries(formData);

    fetch('http://localhost:8080/ingredients',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
});






