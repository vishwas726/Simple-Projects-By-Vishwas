let userSq = [];
let gameSq = [];
let start = false;
let score = 0;
let highScore = 0;
let color = ["red", "purple", "green", "blue"];

let level = 0;
document.addEventListener("keypress", function () {

    if (start == false) {
        start = true;

        gameSq = [];
        setTimeout(levelUp, 1000)


        console.log("start")


    }


})

function levelUp() {
    userSq = [];
    level++;
    if (level > 1) {
        score = score + 5;
    }
    
    highScore = Math.max(score, highScore);


    let h2 = document.querySelector("h2")
    h2.innerText = `Level ${level}     Score :  ${score} High Score : ${highScore}`;

    let random = Math.floor(Math.random() * 4)
    gameSq.push(color[random]);
    let btn = document.querySelector(`.${color[random]}`);

    gameflash(btn);




}


function gameflash(btn) {


    btn.classList.add("gameflash");
    setTimeout(function () {

        btn.classList.remove("gameflash");


    }, 300)


}

function userflash(btn) {


    btn.classList.add("userflash");
    setTimeout(function () {

        btn.classList.remove("userflash");


    }, 200)


}



let btnAll = document.querySelectorAll(".btn");
for (btn of btnAll) {

    btn.addEventListener("click", btnPressed);


}




function btnPressed() {

    let choice = this.getAttribute("id");
    this.classList.add("userflash");

    setTimeout(() => {
        this.classList.remove("userflash");
    }, 200);

    userSq.push(choice);
    check(userSq.length - 1);


}
function check(idx) {

    if (gameSq[idx] === userSq[idx]) {

        if (userSq.length == gameSq.length) {
            setTimeout(levelUp, 1000);
        }


    } else {


        let body = document.querySelector("body");
        body.classList.add("over");
        setTimeout(function () {

            body.classList.remove("over");

        }, 3000)
        let h2 = document.querySelector("h2");
        h2.innerText = `Game Over   Your Score :  ${score}`;

        setTimeout(reset, 3000)


    }



}

function reset() {
    score = 0;
    start = false;
    level = 0;
    userSq = [];
    gameSq = [];
    let h2 = document.querySelector("h2");
    h2.innerText = "Press Any Key To Start Again";


}