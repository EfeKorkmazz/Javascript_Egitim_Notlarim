// document.addEventListener("keypress",run);

// function run(e){
//     // console.log(e.which);
//     // console.log("naber");
//     console.log(e.key);
// };

// document.addEventListener("keydown",run);

// function run(e){
//     // console.log(e.which);
//     // console.log("naber");
//     console.log(e.key);
// };

// document.addEventListener("keyup",run);

// function run(e){
//     // console.log(e.which);
//     // console.log("naber");
//     console.log(e.key);
// };

const header = document.querySelector(".card-header");
const header1 = document.getElementsByClassName("card-header");
const todoInput = document.querySelector("#todo");
console.log(header);
console.log(header1);

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
    // console.log(e.target.value);
};

