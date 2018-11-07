const name = "Bayram EREN";
const departman = "Bilişim";
const salary = 4000;

// const a = `İsim:${name}\nDepartman:${departman}\nMaaş:${salary}`;

// console.log(a);

function a(){
    return "Merhaba";
}

const html = `
        <ul>
            <li>${name}</li>
            <li>${departman}</li>
            <li>${salary}</li>
            <li>${a()}</li>
            </ul>
            `;
document.body.innerHTML=html;
