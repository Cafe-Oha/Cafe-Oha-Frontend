const menuName = document.getElementById("deleteMenuItem")
const btnConfirm = document.getElementById("confirm")
const btnCancel = document.getElementById("cancel")
console.log("btn")
console.log(btnCancel)
console.log(btnConfirm)
console.log(menuName)


const para = new URLSearchParams(window.location.search);
const urlID = para.get("id")
const url= "http://localhost:8080/menu/" + urlID

console.log(url)

getMe()

async function getMe(){
    const response = await fetch(urlID);
    const data = await response.json();
    console.log(data);
    menuName.textContent = data.name
}

async function deleteMenu(){
    await fetch(url,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },

    })

        .then(data => {
            if(data.status === 200){
                window.location.replace("menuItem2.html")
            }
        })
        .catch(err => console.log(err))

    console.log("btn")
}
function cancel()
{
    window.location.replace("instructions.html?id=" + id1)
}
console.log(btnConfirm)
btnConfirm.addEventListener('click', deleteMenu)
btnCancel.addEventListener('click', cancel)


