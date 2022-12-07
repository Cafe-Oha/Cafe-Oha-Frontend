//add save button with event listener
import {getAll} from './editFetchMain';


const saveButton = document.getElementById("saveButton");
const param = new URLSearchParams(window.location.search);
const urlId = param.get("id");
const id = urlId;
const url= "http://localhost:8080/mainMenu/"+id;
const nameTag = document.getElementById("main");
const typeTag = document.getElementById("instructions");
//let imageName = ""

console.log(url)

getMe()

async function getMe()
{
    const response = await fetch(url).then(response => response.json());
    console.log(response);
    nameTag.value = response.main
    typeTag.value = response.instructions
    //imageName = response.imageName
}

async function editMainMenuItem(mainMenuItem) {
    fetch(url,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mainMenuItem)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}
saveButton.addEventListener('click', (e) => {
    e.preventDefault()
    if(nameTag.value != "" && typeTag.value != "") {
        editMainMenuItem({
                "id": id,
                "main": nameTag.value,
                "instructions": typeTag.value
               // "imageName": imageName
            }

        )
        window.location.href = "instructionsMain.html?id=" + id;
    } else {
        alert("You cannot save an empty menu")
    }

})






const cancelButtonEdit = document.getElementById("cancelButton");
cancelButtonEdit.addEventListener("click", () => {
    window.location.href = "instructionsMain.html?id=" + id;

});