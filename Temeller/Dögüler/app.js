
// // let i = 0;

// // while(i < 10){

// //     console.log(i);
// //     i++;

// // }

// const lan = ["bayram","tuğba","hafsa"];

// lan.forEach(function(lang){
//     console.log(lang);
// });



// lan.forEach(function(lang,i,c,d){
//     console.log(lang,i,c,d);
// });


// const users = [
//     {name : "Bayram",age:25},
//     {name : "Tuğba",age:19},
//     {name : "Hafsa",age:1}
// ];

// const names = users.map(function(user){
//     return user.name;
// });

// const age = users.map(function(user){
//     return user.age;
// })

// console.log(names);
// console.log(age);



const user = {
    name : "Bayram",
    age : 23
};

for(let key in user){
    console.log(key,user[key]);
}