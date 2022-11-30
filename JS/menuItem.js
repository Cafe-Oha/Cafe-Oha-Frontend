import { getAll  } from "./Service/API_calls.js";

const menuItemCont = document.querySelector('#meal-wrapper')

getAll("menu").then(r => {
    console.log(r)
    r.forEach(item => {
        let a = document.createElement("a")
        a.href = "instructions.html?id=" + item.id
        let div = document.createElement("div")
        div.className = "MenuItem"
        div.innerText = item.name
        //div.style.backgroundImage = "linear-gradient(45deg, rgba(44, 174, 186, 0.7), rgba(44, 174, 186, 0.7)), url(../img/activity-images/" + item.imageName + ")"
        //div.style.backgroundImage = "linear-gradient(45deg, rgba(2, 166, 253, 0.73), rgba(2, 166, 253, 0.73)), url(../img/activity-images/" + item.imageName + ")"
        a.appendChild(div)
        menuItemCont.appendChild(a)
    })
})



const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const instructions = document.getElementById('instructions');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
//const instructionsCloseBtn = document.getElementById('instructions-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});


// get meal list that matches with the ingredients
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`http://localhost:63342/Cafe-Oha-Frontend/HTML/menuItem.html?#${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if(data.meals){
                data.meals.forEach(meal => {
                    html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
                });
                mealList.classList.remove('notFound');
            } else{
                html = "Sorry, we didn't find menu item!";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}



