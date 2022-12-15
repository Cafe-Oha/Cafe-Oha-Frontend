
import { getAll  } from "./Service/API_calls.js";

const menuItemList = document.querySelector('#menuItem_list')
const addMenu = document.querySelector('#addMenuItemBtn')
const popupBox= document.querySelector('.popupBox');

getAll("menu").then(r => {
    console.log(r)
    r.forEach(item => {
        let a = document.createElement("a")
        a.href = "instructions.html?id=" + item.id
        let div = document.createElement("div")
        div.className = "menuItem"
        div.innerText = item.name
       div.style.backgroundImage ="linear-gradient(rgba(44, 200, 186, 0.7), rgba(0, 500, 300, 0.7))"
        //div.style.backgroundImage = "linear-gradient(45deg, rgba(2, 166, 253, 0.73), rgba(2, 166, 253, 0.73)), url(../resources/menu-images/" + item.imageName + ")"*/
        a.appendChild(div)
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
