


let menuItemName= ["chips","sandwich","soup","toast","salad","apple pie"];


//utilities.cleanInputFields()




    let container = document.getElementById('inputContainer');
    container.innerHTML = "";


    for (let i = 0; i < menuItemName.length; i++) {

        let newLable= document.createElement('label');
        newLable.htmlFor = menuItemName[i];
        newLable.textContent = menuItemName[i]+":";
        newLable.style.float = "left";
        newLable.style.width ="50%";
        newLable.style.color = "rgb(188,155,93)";
        newLable.style.textAlign = "right";
        newLable.style.marginBottom = "20px";


        let newInput = document.createElement('input');
        newInput.type ="number";
        newInput.id = menuItemName[i];
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

menuItemName = menuItemName.map(i => '#' + i);
let inputSelector = menuItemName.toString();
alert(inputSelector);