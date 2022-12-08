const addItem = document.querySelector('#addItem');
const addField = document.querySelector('#addField');
const removeField = document.querySelector('#removeField');
const formAdd = document.querySelector('.add-Menu-Form');

const toggleHide = function(btn){
    if (btn.style.display === 'block'){
        btn.style.display = 'none';
    }
    else {
        btn.style.display = 'block';
    }
}

//dynamically add inputs for ingredients list
addField.addEventListener('click',()=>{
    const newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'menu_ingredients');
    formAdd.appendChild(newField);
})

//remove inputs for ingredients
removeField.addEventListener('click',()=>{
    // > 5 so it doesnt delete other inputs and buttons
    if (formAdd.length > 5){
        formAdd.removeChild(formAdd.lastChild);
    }
})

//display menu items
fetch('http://localhost:8080/menu')
    .then(res => {
        return res.json();
    }).then(data => {
    data.forEach(menu => {
        const markup = `<button type="button" id="${menu.name}">${menu.name}</button>`;
        addItem.insertAdjacentHTML('afterend', markup);
    });
}).catch(err => console.error(err));

//adding ingredients
addItem.addEventListener('click', () => {

    console.log('submitting');
    const formData = new FormData(formAdd);
    const data = Object.fromEntries(formData);

    fetch('http://localhost:8080/menu',{
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