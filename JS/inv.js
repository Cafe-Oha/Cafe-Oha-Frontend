"use strict"

const formAdd = document.querySelector('#addInvForm');
const openFormBtn = document.querySelector('#openFormBtn');
const editInvForm = document.querySelector('#editInvForm');
const deleteBtn = document.querySelector('#deleteBtn');
const editBtn = document.querySelector('#editBtn');
const editName = document.querySelector('#editName');
const closeBtn = document.querySelector('.close-btn');
const editInputs = document.querySelectorAll('.editInput');


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

    //click on cell to display cancel or edit
    document.querySelectorAll('tr')
        .forEach(tr => tr.addEventListener("click", function() {
            toggleHide(editInvForm);

            //displays edited values in inputs
            editInputs.forEach((element,i) => {
                element.value = tr.cells[i].innerHTML;
                i++;
            })

            toggleHide(editBtn);
            toggleHide(deleteBtn);
        }));
})
    .catch(err => console.error(err));


//adding ingredients
formAdd.addEventListener('submit', event => {

    const formData = new FormData(formAdd);
    const data = Object.fromEntries(formData);

    fetch('http://localhost:8080/ingredients/',{
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

//delete by name
deleteBtn.addEventListener('click',(name) =>{
    //gets name value from input field
    name=document.querySelector('#editName').value;
    console.log(document.querySelector('#editName').value);
    fetch('http://localhost:8080/ingredients/delete/'+name,{
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

});



//show or hide form to add ingredients
openFormBtn.addEventListener('click', () => {
    toggleHide(formAdd);
});
closeBtn.addEventListener('click', () => {
   toggleHide(formAdd);
});


//this function changes parameter's style to either block or none(visible or not)
const toggleHide = function(btn){
    if (btn.style.display === 'block'){
        btn.style.display = 'none';
    }
    else {
        btn.style.display = 'block';
    }
}

