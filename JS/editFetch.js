

const saveButton = document.getElementById("saveButton");
const parameter = new URLSearchParams(window.location.search);
const urlId = parameter.get("id");
const id = urlId;
const url= "http://localhost:8080/menu/"+id;
const nameTag = document.getElementById("title");
const typeTag = document.getElementById("instruction");
const ingredient = document.getElementById("ingredient")
//let imageName = ""


console.log(url)

getMe()

async function getMe()
{
    const response = await fetch(url).then(response => response.json());
    console.log(response);
    nameTag.innerText = response.name
    typeTag.innerText = response.instruction
    ingredient.innerText = response.ingredient
}


async function editMenuItem(menuItem) {
    fetch(url,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(menuItem)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))


}
saveButton.addEventListener('click', (e) => {
    e.preventDefault()
    if(nameTag.value != "" && typeTag.value != "") {
        editMenuItem({
                "id": id,
                "title": nameTag.value,
                "instruction": typeTag.value,
                "imageName": imageName
            }

        )
        window.location.href = "instructions.html?id=" + id;
    } else {
        alert("You cannot save an empty menu")
    }

})






const cancelButtonEdit = document.getElementById("cancelButton");
cancelButtonEdit.addEventListener("click", () => {
    window.location.href = "instructions.html?id=" + id;

});
