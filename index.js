const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const question1 = document.getElementById("question");
const input1 = document.getElementById("input");
const form1 = document.getElementById("form");
const score1 = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

score1.innerText = `baxo: ${score}`;
question1.innerText = `${num1} ga ${num2} ni ko'paytirsa nechchi bo'ladi?`;

const correctAns = num1 * num2;

form1.addEventListener("submit", () =>{
    const userAns = +input1.value;
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}