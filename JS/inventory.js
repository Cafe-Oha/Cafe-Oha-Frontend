
function addToInventory(){
    const tbl =  document.getElementById("inventoryTable");
    let row = tbl.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();

    //add user input into table
    cell1.innerHTML= document.getElementById("iid").value;
    cell2.innerHTML= document.getElementById("iquantity").value;
    cell3.innerHTML= document.getElementById("iunit").value;

}




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
        const markup = <td>${ingredient.name}</td>
        <td>${ingredient.quantity}</td>
        <td>${ingredient.unit}</td>;
        document.querySelector('table').insertAdjacentHTML('beforeend', markup);
    });
})
.catch(err => console.error(err));