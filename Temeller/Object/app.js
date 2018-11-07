let value;

const programmer = {
    name : "Bayram EREN",
    age : 27,
    email : "bayrame@civil.com.tr",
    langs : ["python","Java","Javascript"],

    address : {
        city : "Ankara",
        street : "Pendik"
    },

    work : function(){
        console.log("Çalışıyor");
    }
}

value = programmer;

value=programmer.email;

value = programmer["age"];


value = programmer.address.city;

console.log(value);

programmer.work();