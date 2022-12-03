
import { getAll  } from "./Service/API_calls.js";

const menuItemList = document.querySelector('#menuItem_list')
const addMenu = document.querySelector('#addMenuItemBtn')
const popupBox= document.querySelector('.popupBox');

getAll("mainMenu").then(r => {
    console.log(r)
    r.forEach(item => {
        let b = document.createElement("b")
        b.href = "instructionsMain.html?id=" + item.id
        let div = document.createElement("div")
        div.className = "menuItem"
        div.innerText = item.name
        div.style.backgroundImage = "linear-gradient(45deg, rgba(44, 174, 186, 0.7), rgba(44, 174, 186, 0.7)), url(../resources/menu-images/" + item.imageName + ")"
        //div.style.backgroundImage = "linear-gradient(45deg, rgba(2, 166, 253, 0.73), rgba(2, 166, 253, 0.73)), url(../resources/menu-images/" + item.imageName + ")"
        b.appendChild(div)
        menuItemList.appendChild(a)
    })
})

addMenu.addEventListener('click',()=>{
    toggleHide(popupBox);
})
const toggleHide = function(btn){
    if (btn.style.display === 'block'){
        btn.style.display = 'none';
    }
    else {
        btn.style.display = 'block';
    }
}