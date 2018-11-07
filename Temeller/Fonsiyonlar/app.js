function merhaba(name = "Bilgi Yok",age="Bilgi Yok"){
    
    // if(typeof name === "undefined") name = "Bilgi Yok";
    // if(typeof age ==="undefined") age = "Bilgi Yok";

    console.log(`İsim : ${name},Yaş:${age}`);
}

merhaba("Bayram","Eren");

merhaba();

function square(x){
    return x * x;
};

function cube(x){
    return x*x*x;
}


console.log(cube(square(2)));

const mer = function(){
    console.log("deneme")
};

mer();

//ımmediately Invoked Function Ezpression(IIFE)

 (function(name){
     console.log(`Merhaba : ${name}`);
 })("Bayram");


const database = {
    host : "locakhost",
    add : function(){
        console.log("eklendi");
    },
    get : function(){
        console.log("Elde Edildi");
    },
    update : function(){
        console.log("Güüncellendi");
    },
    delete : function(id){
        console.log(`ID : ${id} silindi`);
    }
}

console.log(database.host);

database.add();

database.delete(11);