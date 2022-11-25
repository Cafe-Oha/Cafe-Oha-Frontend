import { getAll  } from "./Service/API_calls.js";

const nav = document.querySelector('.sidebar')
fetch('/HTML/dashboard')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})