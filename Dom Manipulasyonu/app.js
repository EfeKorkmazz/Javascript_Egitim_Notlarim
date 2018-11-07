
let value;

// value = document.forms[0].id;

// value = document.getElementById("todo-form");

// value = document.getElementById("tasks-title");

// value = document.getElementsByClassName("list-group-item")[0];

// value = document.getElementsByTagName("div")[2];

value = document.querySelector("#todo-form");

value = document.querySelector(".card-header")

value = document.querySelectorAll(".list-group-item");

value.forEach(function(el){
    console.log(el);
});

 

console.log(value);