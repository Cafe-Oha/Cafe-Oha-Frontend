import { getAll  } from "./Service/API_calls.js";

window.onload = () => {
    // copy below to add more pages
    fetch('C:\\Users\\GloriaB\\IdeaProjects\\Cafe-Oha-Frontend\\HTML\\inventory.html') // the page we want to use for our sidebar
        .then(data => {
            return data.text()
        })
        .then( data => {
            document.getElementsByClassName("header").innerHTML = data; // inserts to element class="sidebar"
        })
    // copy end
}