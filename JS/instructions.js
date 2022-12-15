const menuItem = document.querySelector(".menuTitle");
const menuInstructions = document.querySelector(".descriptionTitle");

//Get id from URL sent by menuItem2.html
const param = new URLSearchParams(window.location.search);
const urlId = param.get("id");
const id = urlId;
const apiUrl = "http://localhost:8080/menu/" + id
const menuItemPage= true

const descriptionEditButton = document.getElementById("editMenuItemBtn")

descriptionEditButton.addEventListener('click', () =>{
    window.location.href = `editMenuItem.html?id=${id}`
    // $('#cont').load("editMenuItem.html")
})

const btn = document.getElementById("deleteMenuItem")

// btn.addEventListener('click', () =>{
//     window.location.href = `deletePrepMenu.html?id=${id})`
// })


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
window.onload = function() {
    console.log(menuItem.innerHTML);

    const ingredient = document.querySelector('.ingredient-list')
    fetch('http://localhost:8080/menu')
        .then(res => {
            return res.json();
        }).then(data => {

        console.log('displaying list of ingredients')
        console.log(data[0]);
        data.forEach(e=>{
            if(e.name === menuItem.innerHTML){
                console.log('match');
                const number = e.id;
                console.log(e.menuIngredients.length);
                for(let i = 0; i < e.menuIngredients.length; i++){
                    console.log(e.menuIngredients[i].name);
                    const markup =`<li>${e.menuIngredients[i].name}</li>`
                    ingredient.insertAdjacentHTML('beforeend',markup);
                }
            }
        })


    }).catch(error => console.log(error));
}
