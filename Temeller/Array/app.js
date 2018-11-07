const number = [23,1,44,21,13,5];

let value;

value= number.sort();

value = number.sort(function(x,y){
        return x-y;
});

value = number.sort(function(x,y)
{
    return y-x;
});

console.log(value);