const menuItem = document.querySelector(".menuTitle");
const menuInstructions = document.querySelector(".descriptionTitle");

//Get id from URL sent by menuItem2.html
const param = new URLSearchParams(window.location.search);
const urlId = param.get("id");
const id = urlId;
const apiUrl = "http://localhost:8080/menu/" + id
const menuItemPage= true


function out(any){
    console.log(any);
}

async function getIt(){
    out("inside getIt()")
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    menuItem.textContent = data.name;
    menuInstructions.textContent = data.instruction;
}
getIt();

//display ingredients list
/*const description = document.querySelector('#descriptionTitle')
fetch('http://localhost:8080/menu')
    .then(res => {
        return res.json();
    }).then(data => {

    console.log('displaying list of ingredients')

    for (let i = 0; i < data.length; i++) {
        const ing = data[i].menuIngredients;
        for (let j=0; ing.length; j++){
            console.log(ing[j].name);
            const markup = `<ol> <li>${ing[j].name}</li> </ol>`;
            description.insertAdjacentHTML('beforeend', markup);
        }
    }
});*/