
let buttonCreatInput = 'addButton';
let menuItemName= ["chips","sandwich","soup","toast","salad"];
input = menuItemName;



document.getElementById(buttonCreatInput).addEventListener('click', function() {

    let container = document.getElementById('inputContainer');
    container.innerHTML = "";


    for (let i = 0; i < input.length; i++) {
        let inputId = i.toString();

        let newText= document.createElement('p');
        newText.textContent = input[i];
        newText.className = "inputName";
        newText.id ="textId"+inputId;

        let newInput = document.createElement('input');
        newInput.className = "inputClass";
        newInput.id ="inputId"+inputId;

        container.appendChild(newText);
        container.appendChild(newInput);





    }


});