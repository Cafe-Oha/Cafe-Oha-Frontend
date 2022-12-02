//add save button with event listener
//import {getAll} from "./Service/API_calls.js";

const saveButton = document.getElementById("saveButton");
const url= "http://localhost:8080/menu";
const nameTag = document.getElementById("name");
const typeTag = document.getElementById("instruction");



console.log(nameTag)


let name = ""
let type = ""

nameTag.addEventListener("change", (event) => {
    name = event.target.value;
});
typeTag.addEventListener("change", (event) => {
    type = event.target.value;
});


//make a cancel button cancel and go back to the main page
const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
    //menu cancel or not
    //if yes, go back to the main page
    //if no, stay on the page
    if (confirm("Do you want to cancel?")) {
        window.location.href = "menuItem2.html";

    }
});





//fetch url and save as post request
saveButton.addEventListener("click", () => {
        //name and type should not be empty
        if (name === "" || type === "") {
            alert("Please fill out all fields");
            return;
        }
        if (name.length > 50) {
            alert("Name is too long");
            return;
        }
        //make sure name and type is correct english characters and grammar
        if (!name.match(/^[a-zA-Z0-9 ]+$/)) {
            alert("Name is not valid");
            return;
        }
        if (!type.match(/^[a-zA-Z0-9 ]+$/)) {
            alert("Type is not valid");
            return;
        }

         //make sure is not save type with only numbers
        if (type.match(/^[0-9]+$/)) {
            alert("Type is not valid");
            return;
        }

        if (name.match(/^[0-9]+$/)) {
            alert("Number is not valid");
            return;
        }


       fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                instruction: type,
              //  instructor: instructor
            }),
        })
            .then((response) => response.json())
            //send the message about success or failure of the request
            .then((data) => {
                    if (data.status === 400  || data.status === 402 || data.status=== null) {
                        //make a sound for success or failure

                        alert("Menu is not added");

                    }else   {


                        alert("Menu Item successfully added");
                        window.location.href = "menuItem2.html";
                    }

                }
            )
    }
);