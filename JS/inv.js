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
