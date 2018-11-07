
function Pers(ad,saatUcret)
{
    this.ad=ad;
    this.saatUcret=saatUcret;
    this.odeUccret= odeUccret;
};

function odeUccret(saat){
    return this.saatUcret*saat;
};


pers1 = new Pers("Hasan",50);
pers2= new Pers("Meltem",22);

s1= parseInt(window.prompt("birinci personelin calistiği saat miktari...","0"));

alert("merhaba");